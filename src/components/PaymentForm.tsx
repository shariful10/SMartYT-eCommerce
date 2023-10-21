"use client";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import FormattedPrice from "./FormattedPrice";
import { loadStripe } from "@stripe/stripe-js";
import { Products, StateProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";

const PaymentForm = () => {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const { productData, userInfo } = useSelector(
		(state: StateProps) => state?.shopping
	);

	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		let amt = 0;
		productData.map((item: Products) => {
			amt += item.price * item.quantity;
			return;
		});
		setTotalAmount(amt);
	}, [productData]);

	// <===<<=== Stripe Payment ===>>===>
	const stripePromise = loadStripe(
		process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
	);

	const handleCheckout = async () => {
		const stripe = await stripePromise;
		const res = await fetch("http://localhost:3000/api/checkout", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				items: productData,
				email: session?.user?.email,
			})
		})
		const data = await res.json()

		if(res.ok) {
			console.log(data);
		}
	};

	return (
		<div className="w-full bg-white p-4 rounded-[5px]">
			<h2 className="font-semibold">Cart Totals</h2>
			<div className="border-b border-b-slate-300 py-2">
				<div className="max-w-lg flex items-center justify-between">
					<p className="uppercase font-medium">Subtotal</p>
					<p className="">
						<FormattedPrice
							amount={totalAmount ? totalAmount : 0}
						/>
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
			{userInfo && productData?.length !== 0 ? (
				<button
					onClick={handleCheckout}
					className="bg-black text-slate-100 mt-4 py-3 px-6 rounded-[5px] hover:bg-blue-600 duration-200"
				>
					Proceed to checkout
				</button>
			) : (
				<div>
					<button className="bg-black text-slate-100 mt-4 py-3 px-6 rounded-[5px] cursor-not-allowed">
						Proceed to checkout
					</button>
					{!userInfo && (
						<p className="text-base mt-1 text-red-500 font-semibold animate-bounce">
							Please login to continue
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default PaymentForm;
