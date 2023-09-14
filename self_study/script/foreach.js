// let num = [ 1, 2, 3, 4, 5,]

// let result = []
// const final = num.forEach(x => {
//     result.push(x*2)

// })

// console.log(result)




const makeAdultNameList = (humanList) => {
    let result = "";
    humanList.forEach((human) => {
      if (human.age < 20) {
        return; //*! 20이하인 사람은 걍 무시하고 다음으로 넘어간다고 생각하면 됨
      }
  
      result += `<li>${human.name}</li>`
    });
  
    return result;
  };
  
  // 지시사항에 따라 makeChildNameList 함수의 코드를 작성합니다.
  const makeChildNameList = (humanList) => {
    let result = "";
    humanList.forEach((human) => {
      if (human.age >= 20) {
        return;
      }
  
      result += `<li>${human.name}</li>`;
    });
  
    return result;
  }

  let HELLO_WORLD = 'dfd'
  