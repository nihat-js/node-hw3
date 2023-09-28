
require('dotenv')
const http = require('http')
const PORT: number = +process.env.PORT! || 6400
const fs = require('fs/promises')
const { multiSplit } = require("./lib/multiSplit")
const {parseURL } = require("./lib/parseURL")
const {Database} = require("./lib/Database")

http.createServer(async (req: Request, res: any) => {

  const [sanitizedURL,queries] = parseURL(req.url)



  if (req.method == "GET" && sanitizedURL == "/") {
    let data 
    if (queries.size && queries.page){
      data = await Database.get(+queries.page,+queries.size)
    }else{
      data = await Database.get()
    }
    res.end( JSON.stringify(data))
  }

}).listen(PORT, () => console.log(`Server started on ${PORT} `))
