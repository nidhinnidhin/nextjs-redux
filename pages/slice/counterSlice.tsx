import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CounterState {
  value: number
  count: number
}

const initialState: CounterState = {
  value: 0,
  count: 2,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    increase: (state) => {
        state.count += 2
    },
    decrease: (state) => {
        state.count -= 2
    }
  },
})
export const { increment, decrement, increase, decrease } = counterSlice.actions

export const selectValue = (state: RootState) => state.counter.value
export const countValue = (state: RootState) => state.counter.count

export default counterSlice.reducer