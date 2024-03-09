import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function Cart() {

    let a = useSelector((state)=>{ return state})
    console.log(a.cart)

  return (
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
          <td>안녕</td>
        </tr>
        )}
      </tbody>
    </Table>
  )
}
