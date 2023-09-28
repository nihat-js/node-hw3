"use strict";
const path = require('path');
const fs = require("fs/promises");
class Database {
    static async get(arg1, arg2) {
        let data = JSON.parse(await fs.readFile(this.filePath));
        if (typeof arg1 == "number" && typeof arg2 == "number") {
            return data.slice((arg1 - 1) * arg2, arg1 * arg2);
        }
        else {
            return data;
        }
    }
}
Database.filePath = path.resolve(__dirname, "../db", "db.json");
module.exports = {
    Database
};
