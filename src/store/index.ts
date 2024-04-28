import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
  },
})

export type rootReducer = ReturnType<typeof store.getState>
