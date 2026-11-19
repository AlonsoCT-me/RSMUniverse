/** Resolve public assets against Vite's base, including Figma's hosted URL. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith(base) && base !== "/") return path;
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${base}${path.replace(/^\/+/, "")}`;
}
