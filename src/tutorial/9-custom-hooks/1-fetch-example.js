import React, { useEffect, useState } from 'react'
import { useFetch } from './2-useFetch'
const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return <div>{loading ? 'loading' : 'data'}</div>
}

export default FetchExample
