import {useNavigate} from "react-router-dom"

function Main(){
    let navigate = useNavigate()

    return(
        <div>
        <button onClick={()=>{
            navigate('/testpage')}}>start</button>
        </div>
    )
}

export default Main