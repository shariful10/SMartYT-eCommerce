"use client"

import { ItemProps } from "../../types";

const ProductsData = ({item}: ItemProps) => {
  console.log(item, 'Product');

  return (
    <div>ProductsData</div>
  )
}

export default ProductsData