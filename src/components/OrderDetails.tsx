"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Products, StateProps } from "../../types";

const OrderDetails = () => {
	const [totalAmount, setTotalAmount] = useState(0);
	const { orderData } = useSelector((state: StateProps) => state?.shopping);
	const order = orderData.order;

	useEffect(() => {
		let amt = 0;
		// @ts-ignore
		order.map((item: Products) => {
			amt += item.price * item.quantity;
			return;
		});
		setTotalAmount(amt)
	}, [order]);

	return <div>
		<div className="">
			<p>Items</p>
			<p>Quantity</p>
			<p>Unit Price</p>
			<p>Amount</p>
		</div>
	</div>;
};

export default OrderDetails;