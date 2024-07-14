export function keyword_converter(
  text: string | undefined
): string[] | undefined {
  // Check if text is undefined before accessing its properties
  if (text) {
    return text.trim().split(",");
  } else {
    return undefined; // Or handle the case where text is undefined differently
  }
}
