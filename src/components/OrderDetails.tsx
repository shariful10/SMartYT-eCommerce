"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Products, StateProps } from "../../types";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";

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
		setTotalAmount(amt);
	}, [order]);

	return (
		<div>
			<div className="grid grid-cols-7 text-sm font-medium py-2 border-b border-b-gray-300">
				<p className="col-span-4">Items</p>
				<p className="flex items-center justify-center">Quantity</p>
				<p className="flex items-center justify-center">Unit Price</p>
				<p className="flex items-center justify-center">Amount</p>
			</div>
			<div className="py-2 flex flex-col justify-center gap-2 overflow-x-auto">
				{
					// @ts-ignore
					order?.map((item: Products) => (
						<div
							key={item._id}
							className="py-2 border-b border-b-gray-300 grid grid-cols-7 items-center"
						>
							<div className="flex items-start gap-4 text-sm col-span-4">
								<Image
									src={item?.image}
									width={500}
									height={500}
									alt="Product image"
									className="w-28 h-16 object-cover rounded-md"
								/>
								<div className="">
									<h3 className="text-base font-semibold mb-0.5">
										{item?.title}
									</h3>
									<p>{item?.description}</p>
								</div>
							</div>
							<p className="flex items-center justify-center">
								{item?.quantity}
							</p>
							<p className="flex items-center justify-center">
								<FormattedPrice amount={item?.price} />
							</p>
							<p className="flex items-center justify-center">
								<FormattedPrice
									amount={item?.price * item?.quantity}
								/>
							</p>
						</div>
					))
				}
			</div>
			<div className="text-lg font-medium py-2 border-b border-b-gray-300 mt-5">
				<p>Payment Details</p>
			</div>
			<p className="flex items-center gap-x-4">
				Total Paid:
				<span className="text-lg font-semibold text-blue-600">
					<FormattedPrice amount={totalAmount} />
				</span>
			</p>
			<button className="mt-5 border border-gray-50 py-1 px-4 font-medium rounded-md hover:border-blue-600 duration-200">Reset Order</button>
		</div>
	);
};

export default OrderDetails;
