import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import type { Photo } from '../data/site'

export function availablePhoto(photo?: Photo) {
  return photo && /^(?:[\w-]+\/)*[\w.-]+\.(?:avif|webp|png|jpe?g|svg)$/i.test(photo.file) &&
    existsSync(resolve('public/images', photo.file)) ? photo : undefined
}
