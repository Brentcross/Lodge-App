/** Prefix a /public path with the site's base path (needed on GitHub Pages). */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
