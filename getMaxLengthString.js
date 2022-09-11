const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString==null||arrayOfString==undefined)return undefined

  let maxlength = 0
  let maxlength_i = 0
  let equal_maxlength = []
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length>maxlength) {
      maxlength=arrayOfString[i].length
      maxlength_i=i
      for(let m = 0;m <= equal_maxlength.length; m++){
        equal_maxlength.pop()
      }
    }
    else if(arrayOfString[i].length==maxlength){
      equal_maxlength.push(arrayOfString[i])
    }
  }
  let final=[arrayOfString[maxlength_i],...equal_maxlength]
  return final
}
module.exports = getMaxLengthString
