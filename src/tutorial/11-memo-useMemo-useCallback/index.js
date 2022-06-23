import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../9-custom-hooks/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const calcMostExampleExpencive = (data) => {
  console.log('123')
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  const mostExpencive = useMemo(
    () => calcMostExampleExpencive(products),
    [products]
  )

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1 style={{ margin: '3rem' }}>cart : {cart}</h1>
      <h1>most expencive : {mostExpencive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </div>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.count('big list called')
  })

  return (
    <div>
      {products.map((item) => {
        return <SingleProduct key={item.id} {...item} addToCart={addToCart} />
      })}
    </div>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('SingleProduct called')
  })
  let { name, price } = fields
  price = price / 100
  return (
    <article className='product'>
      <p>{name}</p>
      <p>price:{price}</p>
      <button className='btn' onClick={addToCart}>
        add to cart
      </button>
    </article>
  )
}

export default Index
