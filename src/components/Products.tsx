import { getProducts } from '@/helpers';
import React from 'react'
import Container from './Container';
import ProductsData from './ProductsData';

const Products = async () => {
    const products = await getProducts();
    console.log(products);
  return (
    <Container>
        {
            products?.map((item, i) => <ProductsData key={i} />)
        }
    </Container>
  )
}

export default Products