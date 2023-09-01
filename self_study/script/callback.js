function sayHello(name, callback){
    const words = 'hello my name is ' + name 
    callback(words) //매개변수의 함수(콜백 함수 )호출
}

sayHello('son', (name)=>{console.log(name)})