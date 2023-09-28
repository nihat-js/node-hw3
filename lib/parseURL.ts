const {multiSplit} =  require("./multiSplit")

function parseURL(url : string){
  let parts = multiSplit(url, ["?", "&", "="])

  let queries: { [key: string]: string } = {}
  let sanitizedURL = parts.splice(0, 1)[0] // 
  for (let i = 0; i < parts.length;) {
    if (parts[i + 1]) {
      queries[parts[i]] = parts[i + 1]
    }
    i += 2
  }
  return [sanitizedURL,queries]
}

module.exports = {
  parseURL
}