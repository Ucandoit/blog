/**
 * Fetch json data from url.
 * @param url call url
 * @returns json data
 */
export default async function fetchJson<T>(url: string): Promise<T> {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData;
}
