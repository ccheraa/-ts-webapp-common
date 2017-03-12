"use strict";
var dbUrl = '/api/db';
var apiUrl = '/api';
function DBUrl(url) {
    if (url) {
        dbUrl = url;
    }
    return dbUrl;
}
exports.DBUrl = DBUrl;
function ApiUrl(url) {
    if (url) {
        apiUrl = url;
    }
    return apiUrl;
}
exports.ApiUrl = ApiUrl;
//# sourceMappingURL=route.js.map