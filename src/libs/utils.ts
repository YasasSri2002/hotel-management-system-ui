// src/lib/utils.ts

/**
 * Helper for combining class names
 * Example: cn("btn", "btn-primary") => "btn btn-primary"
 */
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Example helper: capitalize a string
 */
export function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
