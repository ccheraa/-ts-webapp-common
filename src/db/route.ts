let  dbUrl = '/api/db';
let  apiUrl = '/api';
export function DBUrl(url?: string): string {
  if (url) {
    dbUrl = url;
  }
  return dbUrl;
}
export function ApiUrl(url?: string): string {
  if (url) {
    apiUrl = url;
  }
  return apiUrl;
}