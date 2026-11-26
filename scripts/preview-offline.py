"""Converte a saída Astro na raiz em uma prévia que abre a partir de index.html."""
from base64 import b64encode
from mimetypes import guess_type
from pathlib import Path
import os
import re
import shutil
import sys
from urllib.parse import urlsplit

source, destination = (Path(argument).resolve() for argument in sys.argv[1:])


def local_path(value):
    return value.startswith("/") and not value.startswith("//")


def inline_css(asset):
    css = (source / asset.lstrip("/")).read_text(encoding="utf-8")

    def embed(match):
        path = match[1].strip("'\"")
        if not local_path(path):
            return match[0]
        target = source / path.lstrip("/")
        media_type = guess_type(target.name)[0] or "application/octet-stream"
        payload = b64encode(target.read_bytes()).decode("ascii")
        return f"url(data:{media_type};base64,{payload})"

    return "<style>" + re.sub(r"url\(([^)]+)\)", embed, css) + "</style>"


def rewrite_page(html, target):
    def relative(value):
        if not local_path(value):
            return value
        parsed = urlsplit(value)
        location = source / parsed.path.lstrip("/")
        if location.is_dir():
            location /= "index.html"
        if not location.is_file():
            raise FileNotFoundError(f"{target.name}: {value}")
        path = os.path.relpath(destination / location.relative_to(source), target.parent)
        return path + (f"?{parsed.query}" if parsed.query else "") + (f"#{parsed.fragment}" if parsed.fragment else "")

    def rewrite_asset(match):
        attribute, value = match.groups()
        if attribute == "srcset":
            candidates = [candidate.strip().split(maxsplit=1) for candidate in value.split(",")]
            value = ", ".join(" ".join([relative(candidate[0]), *candidate[1:]]) for candidate in candidates)
        else:
            value = relative(value)
        return f'{attribute}="{value}"'

    html = re.sub(r'<script type="module" src="(/[^"]+)"></script>',
                  lambda match: "<script type=\"module\">" +
                  (source / match[1].lstrip("/")).read_text(encoding="utf-8") + "</script>", html)
    html = re.sub(r'<link rel="stylesheet" href="(/[^"]+)">', lambda match: inline_css(match[1]), html)
    html = re.sub(r'(<meta http-equiv="refresh" content="0;url=)([^"]+)', lambda match: match[1] + relative(match[2]), html)
    return re.sub(r'\b(href|src|srcset)="([^"]*)"', rewrite_asset, html)


shutil.copytree(source, destination)
pages = sorted(source.rglob("*.html"))
for page in pages:
    target = destination / page.relative_to(source)
    target.write_text(rewrite_page(page.read_text(encoding="utf-8"), target), encoding="utf-8")
print(f"{len(pages)} páginas exportadas para a prévia offline.")
