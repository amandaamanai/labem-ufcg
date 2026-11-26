const menu = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.getElementById('site-navigation')
if (menu && nav) {
  const mobile = matchMedia('(max-width: 1050px)')
  const updateMenu = (opened = false) => {
    menu.hidden = !mobile.matches
    menu.setAttribute('aria-expanded', String(opened))
    nav.hidden = mobile.matches && !opened
  }
  updateMenu()
  mobile.addEventListener('change', () => updateMenu())
  menu.addEventListener('click', () => updateMenu(menu.getAttribute('aria-expanded') !== 'true'))
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return
    const opened = nav.querySelector<HTMLDetailsElement>('details[open]')
    if (opened) {
      opened.open = false
      opened.querySelector('summary')?.focus()
    } else if (mobile.matches && !nav.hidden) {
      updateMenu()
      menu.focus()
    }
  })
  document.addEventListener('click', event => {
    nav.querySelectorAll<HTMLDetailsElement>('details[open]').forEach(details => {
      if (event.target instanceof Node && !details.contains(event.target)) details.open = false
    })
  })
}

const normalize = (value: string) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim()
document.querySelectorAll<HTMLElement>('[data-collection]').forEach(collection => {
  const controls = collection.querySelector<HTMLElement>('.filters')
  const empty = collection.querySelector<HTMLElement>('[data-empty]')
  if (!controls || !empty) return
  const search = controls.querySelector<HTMLInputElement>('[data-search]')
  const selects = [...controls.querySelectorAll<HTMLSelectElement>('select[data-filter]')]
  const fields = [...selects.map(select => select.dataset.filter), ...(search ? ['category'] : [])]
  const selector = [...new Set(fields)].map(field => `[data-${field}]`).join(',')
  const items = [...collection.querySelectorAll<HTMLElement>(selector)]
  const index = items.map(item => ({ item, text: normalize(item.textContent ?? '') }))
  function applyFilters() {
    const query = normalize(search?.value ?? '')
    let count = 0
    for (const { item, text } of index) {
      item.hidden = !text.includes(query) || selects.some(select => select.value && item.dataset[select.dataset.filter ?? ''] !== select.value)
      if (!item.hidden) count++
    }
    if (empty) empty.hidden = count > 0
  }
  controls.hidden = false
  controls.addEventListener('input', applyFilters)
  controls.addEventListener('change', applyFilters)
})

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(group => {
  const dialog = group.querySelector('dialog')
  const image = dialog?.querySelector('img')
  const caption = dialog?.querySelector<HTMLElement>('[data-gallery-caption]')
  const thumbnails = [...group.querySelectorAll<HTMLAnchorElement>('[data-gallery-open]')]
  if (!dialog || !image || !caption || typeof dialog.showModal !== 'function') return
  let index = 0
  let opener: HTMLAnchorElement | undefined
  const show = (next: number) => {
    index = (next + thumbnails.length) % thumbnails.length
    image.src = thumbnails[index].href
    image.alt = thumbnails[index].querySelector('img')?.alt ?? ''
    caption.textContent = `${image.alt} · ${index + 1} de ${thumbnails.length}`
  }
  thumbnails.forEach((thumbnail, position) => thumbnail.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    opener = thumbnail
    show(position)
    dialog.showModal()
  }))
  dialog.querySelector('[data-gallery-close]')?.addEventListener('click', () => dialog.close())
  dialog.querySelector('[data-gallery-prev]')?.addEventListener('click', () => show(index - 1))
  dialog.querySelector('[data-gallery-next]')?.addEventListener('click', () => show(index + 1))
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(index - 1)
    if (event.key === 'ArrowRight') show(index + 1)
  })
  dialog.addEventListener('close', () => opener?.focus())
})

document.querySelectorAll<HTMLButtonElement>('[data-share]').forEach(button => {
  if (!navigator.share && !navigator.clipboard) return
  button.hidden = false
  const status = button.parentElement?.querySelector('[data-share-status]')
  button.addEventListener('click', async () => {
    try {
      if (navigator.share) await navigator.share({ title: document.title, url: location.href })
      else {
        await navigator.clipboard.writeText(location.href)
        if (status) status.textContent = 'Link copiado.'
      }
    } catch (error) {
      if (status && !(error instanceof DOMException && error.name === 'AbortError')) status.textContent = 'Copie o endereço na barra do navegador.'
    }
  })
})

document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(carousel => {
  const slides = [...carousel.querySelectorAll<HTMLElement>('.hero')]
  const controls = carousel.querySelector<HTMLElement>('.carousel-controls')
  const pause = controls?.querySelector<HTMLButtonElement>('[data-slide-pause]')
  const delay = Number(carousel.dataset.carousel)
  if (slides.length < 2 || !controls || !pause || delay < 1000) return
  const preference = matchMedia('(prefers-reduced-motion: reduce)')
  let index = 0
  let paused = preference.matches
  let timer: number | undefined
  const show = (next: number) => {
    slides[index].hidden = true
    index = (next + slides.length) % slides.length
    slides[index].hidden = false
  }
  const schedule = () => {
    window.clearTimeout(timer)
    pause.textContent = paused ? 'Reproduzir' : 'Pausar'
    if (!paused && !document.hidden && !carousel.matches(':hover, :focus-within')) {
      timer = window.setTimeout(() => { show(index + 1); schedule() }, delay)
    }
  }
  controls.hidden = false
  controls.querySelector('[data-slide-prev]')?.addEventListener('click', () => { show(index - 1); schedule() })
  controls.querySelector('[data-slide-next]')?.addEventListener('click', () => { show(index + 1); schedule() })
  pause.addEventListener('click', () => { paused = !paused; schedule() })
  carousel.addEventListener('pointerenter', schedule)
  carousel.addEventListener('pointerleave', schedule)
  carousel.addEventListener('focusin', schedule)
  carousel.addEventListener('focusout', () => window.setTimeout(schedule, 0))
  document.addEventListener('visibilitychange', schedule)
  preference.addEventListener('change', () => { paused = preference.matches; schedule() })
  schedule()
})

document.querySelectorAll<HTMLElement>('[data-countdown]').forEach(element => {
  const target = Date.parse(element.dataset.countdown ?? '')
  if (!Number.isFinite(target)) return
  element.hidden = false
  const update = () => {
    const minutes = Math.max(0, Math.floor((target - Date.now()) / 60000))
    const days = Math.floor(minutes / 1440)
    const hours = Math.floor(minutes % 1440 / 60)
    element.textContent = Date.now() >= target ? 'O horário previsto chegou.' : `Faltam ${days} d, ${hours} h e ${minutes % 60} min.`
  }
  update()
  const timer = window.setInterval(() => {
    update()
    if (Date.now() >= target) window.clearInterval(timer)
  }, 1000)
})
const year = document.querySelector('[data-current-year]')
if (year) year.textContent = String(new Date().getFullYear())

document.querySelectorAll<HTMLElement>('[data-tabs]').forEach(group => {
  const controls = group.querySelector<HTMLElement>('[role="tablist"]')
  const tabs = [...group.querySelectorAll<HTMLButtonElement>('[role="tab"]')]
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls') ?? ''))
  if (!controls || tabs.length < 2 || panels.some(panel => !panel)) return
  const select = (active: number) => {
    tabs.forEach((tab, index) => {
      tab.setAttribute('aria-selected', String(index === active))
      tab.tabIndex = index === active ? 0 : -1
      const panel = panels[index]
      if (panel) panel.hidden = index !== active
    })
  }
  tabs.forEach((tab, index) => {
    const panel = panels[index]
    panel?.setAttribute('role', 'tabpanel')
    panel?.setAttribute('aria-labelledby', tab.id)
    tab.addEventListener('click', () => select(index))
    tab.addEventListener('keydown', event => {
      const next = {
        ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index + tabs.length - 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key]
      if (next === undefined) return
      event.preventDefault()
      select(next)
      tabs[next].focus()
    })
  })
  select(0)
  controls.hidden = false
})

document.querySelectorAll<HTMLButtonElement>('[data-copy-link]').forEach(button => {
  if (!navigator.clipboard) return
  const status = button.parentElement?.querySelector('[role="status"]')
  button.hidden = false
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copyLink || location.href)
      if (status) status.textContent = 'Link copiado.'
    } catch {
      if (status) status.textContent = 'Copie o endereço na barra do navegador.'
    }
  })
})

const noticeBar = document.querySelector<HTMLElement>('[data-notice-bar]')
if (noticeBar) {
  const notices = [...noticeBar.querySelectorAll<HTMLElement>('[data-notice-start]')].map(element => ({
    element,
    start: Date.parse(element.dataset.noticeStart ?? ''),
    end: Date.parse(element.dataset.noticeEnd ?? ''),
  }))
  let timer: number
  const updateNotice = () => {
    window.clearTimeout(timer)
    const now = Date.now()
    const current = notices.find(notice => notice.start <= now && now < notice.end)
    for (const notice of notices) notice.element.hidden = notice !== current
    noticeBar.hidden = !current
    const next = Math.min(...notices.flatMap(notice => [notice.start, notice.end]).filter(time => time > now))
    if (Number.isFinite(next)) timer = window.setTimeout(updateNotice, Math.min(next - now, 2_147_483_647))
  }
  document.addEventListener('visibilitychange', updateNotice)
  updateNotice()
}
