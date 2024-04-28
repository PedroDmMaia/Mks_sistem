import { useSelector } from 'react-redux'

import carrinho from '../../assets/Vector.svg'
import { rootReducer } from '../../store'
import { Carrinho, Contianer } from './styles'

type Props = {
  cartIsOpenProp: (isOpen: boolean) => void
}

export function Header({ cartIsOpenProp }: Props) {
  const { items } = useSelector((state: rootReducer) => state.carrinho)

  return (
    <Contianer>
      <div>
        <span>MKS</span>
        <span>Sistemas</span>
      </div>

      <Carrinho onClick={() => cartIsOpenProp(true)}>
        <img src={carrinho} alt="" />
        <span>{items.length}</span>
      </Carrinho>
    </Contianer>
  )
}
