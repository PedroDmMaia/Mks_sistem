import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFetchProducts } from './api/produtos'
import { Header } from './components/Header'
import { Item } from './components/Item'
import { rootReducer } from './store'
import {
  decrementItem,
  incrementItem,
  setCarrinho,
} from './store/reducers/carrinho'
import {
  Button,
  Container,
  Footer,
  OrderHeader,
  OrderResume,
  OrdetItems,
} from './styles'
import { GlobalStyle } from './styles/global'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const { data } = useFetchProducts()
  const products = data?.products

  const { items } = useSelector((state: rootReducer) => state.carrinho)

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.pruduto.price * item.quantity
    }, 0)
  }

  const dispatch = useDispatch()

  return (
    <>
      <GlobalStyle />
      <Header cartIsOpenProp={setCartIsOpen} />
      <Container>
        <ul>
          {products?.map(({ photo, name, description, price, id, brand }) => (
            <li key={id}>
              <Item
                photo={photo}
                title={name}
                description={description}
                price={price}
              />
              <Button
                onClick={() =>
                  dispatch(
                    setCarrinho({ photo, name, description, brand, id, price }),
                  )
                }
                disabled={!!cartIsOpen}
              >
                <ShoppingBag />
                Comprar
              </Button>
            </li>
          ))}
        </ul>
      </Container>
      <Footer>
        <p>MKS sistemas &copy; Todos os direitos reservados</p>
      </Footer>
      {cartIsOpen && (
        <>
          <OrderResume>
            <OrderHeader>
              <span>
                Carrinho
                <br /> de compras
              </span>
              <X onClick={() => setCartIsOpen(false)} />
            </OrderHeader>
            <OrdetItems>
              {items.map(
                ({ pruduto: { id, name, photo, price }, quantity }) => (
                  <li key={id}>
                    <div>
                      <img src={photo} alt="" />
                      <span id="name">{name}</span>
                    </div>
                    <div>
                      <span>Qtd:</span>
                      <div>
                        <Minus onClick={() => dispatch(decrementItem(id))} />
                        <span>{quantity}</span>
                        <Plus onClick={() => dispatch(incrementItem(id))} />
                      </div>
                    </div>
                    <span>R$ {price}</span>
                  </li>
                ),
              )}
            </OrdetItems>
            <div>
              <p>Total</p>
              <span>{calculateTotalPrice()}</span>
            </div>
          </OrderResume>
          <button>Finalizar compra</button>
        </>
      )}
    </>
  )
}

export default App
