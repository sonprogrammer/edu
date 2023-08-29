function calculate(e) {
    e.preventDefault();

    const mm = document.getElementById('mm').value

  
    const inches = mm / 25.4
    
    // const usSize = document.getElementById('us_size')
    // usSize = (3 * inches) - 22

    
    // const ukSize = document.getElementById('uk_size')
    // usSize = (3 * inches) - 23
    
    // const euSize = document.getElementById('eu_size')
    // usSize = 1.27 *(ukSize + 23) + 2


    const usSize = (3 * inches) - 22;
    const ukSize = (3 * inches) - 23;
    const euSize = 1.27 * (ukSize + 23);

    // 결과를 각 입력 필드에 할당
    document.getElementById('us_size').value = usSize.toFixed(2);
    document.getElementById('uk_size').value = ukSize.toFixed(2);
    document.getElementById('eu_size').value = euSize.toFixed(2);

    

}


// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc")
button.addEventListener("click", calculate)