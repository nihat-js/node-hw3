const path = require('path')
const fs = require("fs/promises")

interface INews {
  id: number,
  title: string,
  text: string,

}

class Database {

  static readonly filePath = path.resolve(__dirname, "../db", "db.json")

  static async get(): Promise<INews[]>;
  static async get(page: number, size: number): Promise<INews[]>;
  static async get(arg1?: undefined | number, arg2?: undefined | number): Promise<INews[]> {

    let data = JSON.parse(await fs.readFile(this.filePath))
    if (typeof arg1 == "number" && typeof arg2 == "number") {
      return data.slice((arg1 - 1) * arg2, arg1 * arg2)
    } else {
      return data
    }
  }

}

module.exports = {
  Database
}