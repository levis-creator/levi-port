export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
export function convertISOToDateString(isoDate: string): string {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  // Months are zero based
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
