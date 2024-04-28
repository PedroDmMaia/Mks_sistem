import { Container, Price } from './styles'

type Props = {
  photo: string
  title: string
  price: number
  description: string
}

export function Item({ photo, title, price, description }: Props) {
  return (
    <Container>
      <div>
        <img src={photo} alt="" />
        <div>
          <span>{title}</span>
          <Price>R${price}</Price>
        </div>
        <p>{description}</p>
      </div>
    </Container>
  )
}
