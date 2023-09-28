
require('dotenv')
const http = require('http')
const PORT = process.env.PORT || 6400
const fs = require('fs/promises')

http.createServer ( async(req: Request, res: any) => {
  if (req.method == "GET" && req.url == "/" ){
    let data = await fs.readFile("./db.json","utf8")
    res.end(JSON.stringify(data))
    
  }

}).listen(PORT, () => console.log( `Server started on ${PORT} ` ))