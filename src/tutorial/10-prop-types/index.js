import React from 'react'
import { useFetch } from '../9-custom-hooks/2-useFetch'
import Product from './Product'
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      {products.map((product) => {
        console.log(product)
        return <Product key={product.id} {...product} />
      })}
    </div>
  )
}

export default Index
