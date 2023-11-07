import {Table} from 'react-bootstrap'

function Cart() {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>1</td>
            <td>수정하기</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Cart
