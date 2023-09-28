// const student = {
//     name: "elice",
//     age: 7,
//     address: "England",
//     favorite: ["rabbit", "blue", "ribbon"],
//   };
  
//   /* 지시사항 1번: 학생 이름 */
//   console.log('학생 이름: ' + student.name)
  
//   /* 지시사항 2번: 학생이 좋아하는 것들 */
//   console.log('학색이 좋아하는 것들' + student.favorite.join(', '))



// function checkSign (n){
//     if(n > 0){
//         return "positive"
//     }else if(n < 0){
//         return "negative"
//     }else{
//         return "zero"
//     }
// }

//*최댓값 구하기 
// var getMaxNumber = function (arr) {
//     var len = arr.length;
  
//     var max = arr[0];
  
//     for (i = 1; i < len; i++) if (max < arr[i]) max = arr[i];
  
//     return max;
//   };



//*reset()써보기
// form.addEventListener("submit", function (e) {
//     e.preventDefault()
  
//     let rain = input.value
  
//     if(rain >= 50){
//         answer.innerHTML = '우산을 챙긴다.'
//     }else{
//         answer.innerHTML = '그냥 간다.'
//     }
//     form.reset() //* 입력 창을 초기화 시켜줌
//   });

//   var boxItems = document.getElementsByTagName("button");

//   for (var i = 0; i < 3; i++) {
//     boxItems[i].item_name = data.items[i].name;
//     boxItems[i].group_name = data.items[i].group;
//     boxItems[i].addEventListener("click", activateItem);
//   }
  
//   function activateItem() {
//     alert("Hi, " + this.item_name + "!  You are in group " + this.group_name);
//   }

// function calculate(e) {
//     e.preventDefault();
  
//     const mm = document.getElementById("mm").value;
  
//     const inches = mm / 25.4;
  
//     const usSize = 3 * inches - 22;
  
//     const ukSize = 3 * inches - 23;
  
//     const euSize = 1.27 * (ukSize + 23) + 2;
  
//     document.getElementById("us_size").value = usSize.toFixed(2);
//     document.getElementById("uk_size").value = ukSize.toFixed(2);
//     document.getElementById("eu_size").value = euSize.toFixed(2);
//   }


//*indexedDB(브라우저 내부 데이터베이스)
const addEntryToDb = (storeName, entry) => {
    const database = onRequest.result
    //*indexedDB에접근하기 위해 열려진 데이터베이스참조를 database변수에 저장
    //*OnRequest.result는 데이터 베이스 요청(onRequest)의 결과로 열려진 데이터베이스를 나타낸다

    const transaction = database.transaction([storeName], 'readwrite')
    //*데이터베이스 내에서 트랜잭션을 시작.
    //*storeName은 트랜잭션 대상의 object store이름이다
    //*readwrite는 읽기 및 쓰기 권한을 가진 트랜잭션을 생성한다는 것을 나타냄
    
    const store = transaction.objectStore(storeName)
    //*transaction에서 사용할 object store를 얻어온다. 이 store는 데이터를 저장하는 공간임
    
    store.add(entry)
    //*store를 사용해 entry라는 항목을 데이터베이스에 추가한다
    
    transaction.onerror = () => {
      console.log(`error adding Entry to ${storeName}.`)
      console.log(transaction.error);
    }
    //*트랜잭션에서 에러가 발생했을 때 처리할 에러 핸들러를 등록
  }
  //*위함수는 IndexedDB데이터베이스에서 지정된 object store에 새항목을 추가하는 데 사용된다 
  
  // clearAllEntries 함수를 작성합니다.
  const clearAllEntries = (storeName) => {
    const database = onRequest.result
    const transaction = database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    
    store.clear()
  }

  // addWord 함수를 작성합니다.
const addWord = (e) => {
    e.preventDefault()
    
    const newWord = wordInput.value
    addEntryToDb("programmingwords", newWord)  
  }
  
  // deleteList 함수를 작성합니다.
  const deleteList = (e) => {
    e.preventDefault()
    
    clearAllEntries("programmingwords")
  }
  
  