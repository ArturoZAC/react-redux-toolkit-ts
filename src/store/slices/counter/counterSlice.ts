import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

