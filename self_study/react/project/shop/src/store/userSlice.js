import {  createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: { name : 'kim', age : 20 },
    reducers:{
          changeName(state){
              state.name = 'son'
          },
          changeAge(state, a){
            state.age += a.payload
          }
      }
  })

  export const { changeAge } = user.actions

export default user