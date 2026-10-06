export function isPlaceholder(value: string): boolean {
  return !value.trim() || value.includes("[");
}
export function contactHref(value: string, email = false): string | undefined {
  if (isPlaceholder(value)) return undefined;
  if (email)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? `mailto:${value}`
      : undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}
