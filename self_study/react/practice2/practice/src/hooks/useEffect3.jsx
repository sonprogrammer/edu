import React, {useEffect} from "react";

const Timer = (props) =>{
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log('timer is running');
        }, 1000)

        return () =>{
            clearInterval(timer)
            console.log('timer is end')
        }
    },[])

    return(
        <div>
            <span>timer is starting. look at the console</span>
        </div>
    )
}

export default Timer