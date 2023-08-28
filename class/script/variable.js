var globalNum = 10;

function printNum(){
    console.log(globalNum)   //undefined why? 지역변수 > 전역변수기때문 그리고 함수내부에서
        //다시 선언하면서 타임데드존이 생김 그래서 Undefined가 됨
    var globalNum = 20;
    console.log(globalNum)   // 20
    
}

printNum()