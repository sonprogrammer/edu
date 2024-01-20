import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestPage(){
    let navigate = useNavigate()


    //각 mbti별 문제 3개씩 그럼 총 12개 있어야함 
    cpmst [data] = useState({
        1:{
            ques: "EI구분",
            ans1: "E성향",
            ans2: "I성향"
        },
        2:{
            ques: "EI구분",
            ans1: "E성향",
            ans2: "I성향"
        },
        3:{
            ques: "EI구분",
            ans1: "E성향",
            ans2: "I성향"
        },
        4:{
            ques: "EI구분",
            ans1: "E성향",
            ans2: "I성향"
        },
    })

    return(
        <div>
            <button onClick={()=>{
                navigate('/resultpage')
            }}>A1</button>
            <button onClick={()=>{
                navigate('/resultpage')
            }}>A2</button>
        </div>
    )
}

export default TestPage
