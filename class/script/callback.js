const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);
// console.log(result);

// ===
function callback(element){
    // return element.length > 6;
    if(element.length > 6){
        return true
    }else{
        return false; 
    }
}

const result = words.filter(callback)
console.log(result)


//배달 주문이 들어왔어요 => 결제 => 결제 완료 => 배달 오더가 들어감 => 배달or취소