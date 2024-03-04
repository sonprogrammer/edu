import React, {useState , useEffect} from "react";


function Count(){
    const [count, setCount] = useState(1)
    const [name, setName] = useState('')

    const handleCountUpdate = (e)=>{
        setCount(count + 1)
    }

    const handleInputChange = (e) =>{
        setName(e.target.value)
    }

    //렌더링될 때마다 매번 실행됨 -렌더링 이후
    // useEffect(()=>{
    //     console.log('렌더링됨🎨')
    // }, ) 

    // //count가 변화할 때마다 실행됨
    // useEffect(()=>{
    //     console.log('🎖️렌더링됨')
    // }, [count]) 
    //deps(dependencies array)에 값을 이렇게 주면 count가 바뀔 때만 리렌더링된다. 원래는 name이 바뀔 때도 리렌더링되서
    //계속 콘솔에 렌더링됨이 계속 찍혔음

    //name이 변화할 때마다 실행됨
    // useEffect(()=>{
    //     console.log('⭐️⭐️렌더링됨')
    // }, [name]) 

    //처음 화면에 렌더링 될 때만 실행됨
    useEffect(()=>{
        console.log('🩷렌더링됨')
    }, []) 



    return(
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span> <br />
            <input type="text"  value={name} onChange={handleInputChange}/><br />
            {/* input의 value값은 name state이다 */}
            <span>name : {name}</span>
        </div>
    )
}
export default Count