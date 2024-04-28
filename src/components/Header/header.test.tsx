import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Header } from './index'

const mockStore = configureStore([])

const originalAlert = window.alert
beforeAll(() => {
  window.alert = jest.fn()
})

afterAll(() => {
  window.alert = originalAlert
})

describe('Header component', () => {
  let store: ReturnType<typeof mockStore>
  let cartIsOpen: jest.Mock<void, [boolean]>

  beforeEach(() => {
    const initialState = {
      carrinho: {
        items: [],
      },
    }

    store = mockStore(initialState)

    cartIsOpen = jest.fn()

    render(
      <Provider store={store}>
        <Header cartIsOpenProp={cartIsOpen} />
      </Provider>,
    )
  })

  it('should render with the correct text', () => {
    expect(screen.getByText('MKS')).toBeInTheDocument()
    expect(screen.getByText('Sistemas')).toBeInTheDocument()
  })

  it('should call cartIsOpenProp when clicking on Carrinho', async () => {
    fireEvent.click(screen.getByTestId('carrinho-button'))
  })
})
