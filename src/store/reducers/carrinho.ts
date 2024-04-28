import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
}

type CarrinhoState = {
  items: {
    pruduto: Item
    quantity: number
  }[]
}

const initialState: CarrinhoState = {
  items: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    setCarrinho: (
      state,
      action: PayloadAction<Omit<Item, 'createdAt' | 'updatedAt'>>,
    ) => {
      const payload = action.payload

      if (state.items.find((item) => item.pruduto.id === payload.id)) {
        alert('produto já adicionado no carrinho')
      } else {
        state.items = [...state.items, { pruduto: payload, quantity: 1 }]
      }
    },

    incrementItem: (state, action: PayloadAction<number>) => {
      const payload = action.payload

      const quantityItem = state.items.find(
        (item) => item.pruduto.id === payload,
      )

      if (quantityItem) {
        quantityItem.quantity++
      }
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const payload = action.payload

      const quantityItem = state.items.find(
        (item) => item.pruduto.id === payload,
      )

      if (quantityItem) {
        quantityItem.quantity--
      }

      if (quantityItem?.quantity === 0) {
        state.items = [
          ...state.items.filter((item) => item.pruduto.id !== action.payload),
        ]
        alert('produto removido do carrinho')
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((item) => item.pruduto.id !== action.payload),
      ]
      alert('produto removido do carrinho')
    },
  },
})

export const { setCarrinho, incrementItem, decrementItem, removeItem } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
