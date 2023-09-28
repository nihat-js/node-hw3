"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv');
const http = require('http');
require('dotenv').config();
const fs = require('fs/promises');
const { multiSplit } = require("./lib/multiSplit");
const { parseURL } = require("./lib/parseURL");
const { Database } = require("./lib/Database");
const PORT = +process.env.PORT || 6400;
http.createServer(async (req, res) => {
    const [sanitizedURL, queries] = parseURL(req.url);
    if (req.method == "GET" && sanitizedURL == "/") {
        let data;
        if (queries.size && queries.page) {
            data = await Database.get(+queries.page, +queries.size);
        }
        else {
            data = await Database.get();
        }
        res.end(JSON.stringify(data));
    }
}).listen(PORT, () => console.log(`Server started on ${PORT} `));
