import { createSlice, configureStore } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
      increment: (state, action)=> {
        state.value += action.payload
      },
      decrement: (state, action) => {
      state.value -= action.payload
    },
    reset: (state, action)=> {
      state.value = 0
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer

