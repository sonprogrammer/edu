import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase, plusCount } from '../store'


function Child(){
    console.log('re-rendering')
    return(
        <div>i am child</div>
    )
}

export default function Cart() {


    let a = useSelector((state)=>{ return state})
    console.log(a.cart)

    let dispatch = useDispatch()

  return (
    <>
    <div>
        <Child></Child>
        <button onClick={()=>{}}></button>
    </div>
    <h6>{a.user.name} {a.user.age}</h6>
    <button onClick={()=>{
        dispatch(increase(100))
    }}>button</button>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {a.cart.map((item, i)=>
        <tr>
          <td>{a.cart[i].id}</td>
          <td>{a.cart[i].name}</td>
          <td>{a.cart[i].count}</td>
          <td>
            <button onClick={()=>{
                dispatch(plusCount(i))
            }}>+</button>
          </td>
        </tr>
        )}
      </tbody>
    </Table>
    </>
  )
}
