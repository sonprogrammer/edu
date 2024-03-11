import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: {name : 'son', age: 28},

    reducers:{
        changeName(state){
            state.name = 'youngjin'
        },
        increase(state, action){
            state.age += action.payload
        }
    }

})

export let {changeName, increase}  =  user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [10,11,12]
})

let cart = createSlice({
    name : 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] ,
    reducers:{
        plusCount(state,action){
            let number = state.findIndex((a)=>{return a.id == action.payload})
            state[number].count++;
        },
        addItem(state, action) {
            const orderItem = action.payload
            const existingItem = state.find((a) => a.id === action.payload.id)
            
            if(existingItem){
              existingItem.count += 1
            }else{
              return [...state, addItem]
      
            }
            //id값이 하나더 cart에 존재한다면 수량만 증가시켜라
          }
    }
})

export let { plusCount,addItem } = cart.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
}) 