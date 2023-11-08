import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      // const itemIndex = action.payload //action.payload로 아이템의 인덱스를 알아옴 action.payload가
      //들어가는 자리는 addCount의 매개변수 값이니간
      // state[itemIndex].count += 1
      const num = state.findIndex((a) => {
        return a.id === action.payload
      })
      //cart에서 가져온 데이터로 객체를 만드는데(a) 거기서 id값이 addcount함수의 매개변수에 들어오는 값이랑 같으면
      console.log(num)
      state[num].count += 1
      //cart 스테이트에 count를 +1해줘라이다
    },
    addOrder(state, action) {
      // const orderItem = action.payload
      // state.push(orderItem)
      const addId = state.find((a) => a.id === action.payload.id)
      if(addId === undefined) {
         state.push(action.payload)
      }else{
        state[addId.id].count++
        // state[addId].count += 1
      }


    

      //id값이 하나더 cart에 존재한다면 수량만 증가시켜라
    },
    removeItem(state, action) {
      const num = state.find((a) => a.id === action.payload)
      return state.filter((item) => item.id !== num.id)
    },
  },
})
export const { addCount, addOrder, removeItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
})
