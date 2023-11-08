import { configureStore, createSlice } from '@reduxjs/toolkit'
import user  from './userSlice'

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const itemIndex = action.payload //action.payload로 아이템의 인덱스를 알아옴 action.payload가
      //들어가는 자리는 addCount의 매개변수 값이니간
      state[itemIndex].count += 1
    },
    addOrder(state, action){
      const orderItem = action.payload
      return[...state, orderItem]
    }
  },
})
export const { addCount,addOrder } = cart.actions


export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
})
