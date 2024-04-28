import { useQuery } from 'react-query'

export interface Item {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: Date
  updatedAt: Date
}

interface ResponseData {
  products: Item[]
}

const URL =
  'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'

async function fetchItems(): Promise<ResponseData> {
  const response = await fetch(URL)
  const data = await response.json()

  const products = data.products.map((product: Item) => {
    const priceWithoutDecimal = Math.floor(product.price)

    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      photo: product.photo,
      price: priceWithoutDecimal,
      createdAt: new Date(product.createdAt).toISOString(),
      updatedAt: new Date(product.updatedAt).toISOString(),
    }
  })

  return {
    products,
  }
}

export const useFetchProducts = () => {
  const { data, isLoading, error } = useQuery<ResponseData, Error>(
    'products',
    fetchItems,
  )

  return { data, isLoading, error }
}
