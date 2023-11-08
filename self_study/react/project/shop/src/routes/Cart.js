import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../store/store'
import { changeAge } from '../store/userSlice'

function Cart() {
  const carts = useSelector((state) => {
    return state.cart
  })
  console.log(carts)
  const users = useSelector((state) => {
    return state.user
  })

  const dispatch = useDispatch()

  return (
    <div>
      {/* 연습 */}
      <h6>
        {users.name} {users.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(100))
        }}>
        button
      </button>
      {/* 연습 */}
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
                <td>
                  <button onClick={() => {
                    dispatch(addCount(i));
                  }}>+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Cart
