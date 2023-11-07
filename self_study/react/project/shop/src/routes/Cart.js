import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart() {
  const carts = useSelector((state) => {
    return state.cart
  })

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {/* tr은 행, th,td는 열 */}
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        {/* thead는 제목부분 */}
        <tbody>
          {/* tbody는 내용부분 */}

          {carts.map((cart, i) => {
            return (
              <tr key={i}>
                <td>{carts[i].id}</td>
                <td>{carts[i].name}</td>
                <td>{carts[i].count}</td>
                <td>수정하기</td>
              </tr>
            )
          })}
        
        </tbody>
      </Table>
    </div>
  )
}

export default Cart
