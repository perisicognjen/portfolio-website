/**
 * Resolve public asset paths from portfolio.json references.
 * Place files under public/assets/ — see folder README files for conventions.
 */
export function assetUrl(path) {
  if (!path) return null
  return path.startsWith('/') ? path : `/${path}`
}

export function cvUrl(filename) {
  if (!filename) return null
  return `/assets/cv/${filename}`
}

export function projectImage(project) {
  return assetUrl(project?.image)
}
