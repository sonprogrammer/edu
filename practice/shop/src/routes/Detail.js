import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail({shoes}) {

  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')

  useEffect(()=>{
    if(isNaN(num)==true){
      console.log("don't type string")
    }
    console.log(num)
  },[num])
  
  useEffect(()=>{
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  },)


  let {id} = useParams();
  let item = shoes.find((x)=>{
    return x.id == id;
  })

    return (
      <div className='container'>
        {
          alert ? <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
        }
        <div className='row'>
          <div className='col-md-6'>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width='100%'
              alt="1"
            />
          </div>
          <div className='col-md-6'>
            <input onChange={(e)=>setNum(e.target.value)} />
            <h4 className='pt-5'>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}원</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
    )
  }
  export default Detail