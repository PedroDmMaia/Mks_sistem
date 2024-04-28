import { useSelector } from 'react-redux'

import carrinho from '../../assets/Vector.svg'
import { rootReducer } from '../../store'
import { Carrinho, Contianer } from './styles'

type Props = {
  cartIsOpenProp: (isOpen: boolean) => void
}

export function Header({ cartIsOpenProp }: Props) {
  const { items } = useSelector((state: rootReducer) => state.carrinho)

  function handleCartIsOpen() {
    if (items.length > 0) {
      cartIsOpenProp(true)
    } else {
      alert('carrinho vazio')
    }
  }

  return (
    <Contianer>
      <div>
        <span>MKS</span>
        <span>Sistemas</span>
      </div>

      <Carrinho
        data-testid="carrinho-button"
        onClick={() => handleCartIsOpen()}
      >
        <img src={carrinho} alt="" />
        <span>{items.length}</span>
      </Carrinho>
    </Contianer>
  )
}
