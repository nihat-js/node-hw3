"use strict";
const { multiSplit } = require("./multiSplit");
function parseURL(url) {
    let parts = multiSplit(url, ["?", "&", "="]);
    let queries = {};
    let sanitizedURL = parts.splice(0, 1)[0]; // 
    for (let i = 0; i < parts.length;) {
        if (parts[i + 1]) {
            queries[parts[i]] = parts[i + 1];
        }
        i += 2;
    }
    return [sanitizedURL, queries];
}
module.exports = {
    parseURL
};
