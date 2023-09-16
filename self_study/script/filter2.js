function isLong(str){
    const length = str.length;
    if(length >= 5){
        return true
    }else{
        return false
    }
}

function getLongString(inputA) {
  const LongStrings = inputA.filter(isLong)
  
  return LongStrings  
}

const inputA = ["안", "안녕", "안녕하", "안녕하세", "안녕하세요"]

console.log(getLongString(inputA))

