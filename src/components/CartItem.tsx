import React from 'react'
import { StateProps } from '../../types';
import { useSelector } from 'react-redux';

const CartItem = () => {
    const { productData } = useSelector((state: StateProps) => state?.shopping);

  return (
    <div>CartItem</div>
  )
}

export default CartItem