const getJson = (resource, callback) => {
    return new Promise((resolve, reject) =>{

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)//json데이터를 파싱해주는거임
                // callback(undefined, data)
                console.log(request.responseText)
                resolve(data)
            } else if(request.readyState === 4){ //readyState 가 4라는 건 통신이 완료되엇다는 뜻(파일을 찾든 못찾든)
                // callback('통신 장애가 있습니다', request.responseText)
                reject('통신 불가')
            }
        });

        request.open('GET', resource)
        request.send();
    });
}

//링크주소를 받아아왔을 때 data를 받아서 표현을 해준다는 뜻
// getJson('https://jsonplaceholder.typicode.com/todosssssss/1').then(data =>{
//     console.log('resolve', data)
    
// },err=>{
//     console.log('rejected', err)
// })


// getJson('https://jsonplaceholder.typicode.com/todoss/1').then(data =>{
//     console.log(data)
// }).catch(err =>{
//     console.log('error: ', err)
// })

getJson('https://jsonplaceholder.typicode.com/todos/1').then(data=>{
    console.log(data.title)
    return getJson('https://jsonplaceholder.typicode.com/todosdffdfdfd/2')
}).then(data =>{
    console.log(data.title)
    return getJson('https://jsonplaceholder.typicode.com/todos/3')
}).then(data =>{
    console.log(data.title)
}).catch(err =>{
    console.log('통신에러 발생', err)
})


