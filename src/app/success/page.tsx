import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const Success = () => {
	return (
		<Container className="flex items-center justify-center min-h-[calc(100vh-380px)]">
			<div className="flex flex-col items-center justify-center gap-y-5">
				<h2 className="text-4xl font-bold text-green-600">
					Your Payment Accepted By shoppingmart.varcel.app 🎉
				</h2>
				<p className="text-xl">
					Now you can view your oders or continue shopping with us
				</p>
				<div className="flex items-center gap-x-5">
					<Link href={"order"}>
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-blue-600 duration-300">
							View Orders
						</button>
					</Link>
					<Link href={"/"}>
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-blue-600 duration-300">
							Continue Shopping
						</button>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Success;
