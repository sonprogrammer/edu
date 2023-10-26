import { useNavigate } from "react-router-dom";

function TestPage(){
    let navigate = useNavigate()
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
