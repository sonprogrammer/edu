import { useNavigate } from "react-router-dom";

function ResultPage(){
    let navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>{
                navigate('/')
            }}>replay</button>
        </div>
    )
}

export default ResultPage