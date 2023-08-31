// function promise() {
//     return new Promise((resolve, reject) => {
//         reject(1);
//     });
// }

// promise()
// .then((result) => {
// 	return result+1;
// })
// .catch(() => {
//     //error 처리
//     console.error('error', error)
// })
// .finally(() => {
//     console.log('finally')
// })

// //위 promis()랑 같은 뜻임 
// function foo(){
//     try{
//     const result = await promise() + 1; //return result +1이랑 같은 뜻
//         return result + 1;
//     }catch(error){
//         console.error('error', error)
//     }finally{
//         console.log('finally')
//     }

// }

// function promise() {
//     return new Promise((resolve, reject) => {
//         // resolve(1);
//         reject(1)
//     });
// }

// promise()
//     .then((result) => {
//         console.log("1then", result);
//         return result + 1; //=== return Pormis.resolve(result + 1)
//     })
//     .catch((error) => {
//         console.log("1catch", error);
//     })
//     .then((result) => {
//         console.log("2then", result);
//         return result + 1;
//     })
//     .catch((error) => {
//         console.log("2catch", error);
//     });



//////////////////////////////////////////////////////////////////////////////////////////

function promise() {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}
// promise()
//     .then((result) => {  //1
//         console.log("1then", result);
//         return Promise.reject(result + 1);
//     })
//     .catch((error) => {
//         console.log("1catch", error); // 2
				
//     })
//     .then((result) => {
//         console.log("2then", result);
//         return result + 1;
//     })
//     .catch((error) => {
//         console.log("2catch", error);
//     });
    //위를 try catch 로 바꿔버리기
    //===

async function foo(){
try{
    const result = await promise()
    console.log('1then', result)
    const then2 = await Promise.reject(result + 1)
    
    try{
        console.log('2then', then2)
        const result2 = then2 + 1;
    }catch(error){
        console.log('2catch', error)
    }
}catch(error){
    console.log('1catch', error)

}
}
foo();




//////////////////////////////////////////////////////////////////////////////////////////



