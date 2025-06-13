export function clsx(classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
