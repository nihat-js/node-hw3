function multiSplit(str  : string, symbols : string[]){
  let part =""
  let arr = []
  for (let char of str){
    if (symbols.includes(char)){
      arr.push(part)
      part = ""
    }else{
      part+=char
    }
  }
  if (part) arr.push(part)
  return arr
}

// console.log(multiSplit("test?page=1&size=10",["?","=","&"]))
module.exports = {
  multiSplit
}
