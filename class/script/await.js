function promise() {
    return new Promise((resolve, reject) => {
        reject(1);
    });
}

promise()
.then((result) => {
	return result+1;
})
.catch(() => {
    //error 처리
    console.error('error', error)
})
.finally(() => {
    console.log('finally')
})

//위 promis()랑 같은 뜻임 
function foo(){
    try{
    const result = await promise() + 1; //return result +1이랑 같은 뜻
        return result + 1;
    }catch(error){
        console.error('error', error)
    }finally{
        console.log('finally')
    }

}