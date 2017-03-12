let  rootUrl = '/api/db';
let  apiUrl = '/api';
export function RootUrl(url?: string): string {
  if (url) {
    rootUrl = url;
  }
  return rootUrl;
}
export function ApiUrl(url?: string): string {
  if (url) {
    apiUrl = url;
  }
  return apiUrl;
}