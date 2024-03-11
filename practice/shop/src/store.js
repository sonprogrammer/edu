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
        plusCount(state,a){
            state[a.payload].count++;
        }
    }
})

export let { plusCount } = cart.actions

export default configureStore({
  reducer: { 
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
}) 