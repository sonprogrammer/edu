import React,{useState} from "react";
import { useEffect } from "react";

function Counter(props){
    const [time, setTime] = useState(1)

    const handleClick = () => {
        let newTime;
        if(time>=12){
            newTime = 1;
        }else{
            newTime = time + 1;
        }
        setTime(newTime)
    }

    

    return(
        <div>
            <span style={{fontSize : '24px'}}>현재 시각 : {time}</span>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default Counter

