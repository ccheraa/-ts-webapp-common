"use strict";
var rootUrl = '/api/db';
var apiUrl = '/api';
function RootUrl(url) {
    if (url) {
        rootUrl = url;
    }
    return rootUrl;
}
exports.RootUrl = RootUrl;
function ApiUrl(url) {
    if (url) {
        apiUrl = url;
    }
    return apiUrl;
}
exports.ApiUrl = ApiUrl;
//# sourceMappingURL=route.js.map