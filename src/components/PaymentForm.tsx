"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Products, StateProps } from "../../types";
import FormattedPrice from "./FormattedPrice";

const PaymentForm = () => {
    const { productData, userInfo } = useSelector(
        (state: StateProps) => state?.shopping
    );

    const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		let amt = 0;
		productData.map((item: Products) => {
			amt += item.price * item.quantity
			return
		})
		setTotalAmount(amt);
	}, [productData]);

  return (
    <div className="w-full bg-white p-4 rounded-[5px]">
        <h2 className="font-semibold">Cart Totals</h2>
        <div className="border-b border-b-slate-300 py-2">
            <div className="max-w-lg flex items-center justify-between">
                <p className="uppercase font-medium">Subtotal</p>
                <p className="">
                    <FormattedPrice amount={totalAmount ? totalAmount : 0} />
                </p>
            </div>
        </div>
        <div className="border-b border-b-slate-300 py-2">
            <div className="max-w-lg flex items-center justify-between">
                <p className="uppercase font-medium">Shipping</p>
                <p className="">
                    <FormattedPrice amount={20} />
                </p>
            </div>
        </div>
        <div className="border-b border-b-slate-300 py-2">
            <div className="max-w-lg flex items-center justify-between">
                <p className="uppercase font-medium">Total</p>
                <p className="">
                    <FormattedPrice amount={totalAmount + 20} />
                </p>
            </div>
        </div>
    </div>
  )
}

export default PaymentForm;