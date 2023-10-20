"use client";
import { StateProps } from "../../../types";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import PaymentForm from "@/components/PaymentForm";
import { resetCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
	const dispatch = useDispatch();
	const { productData } = useSelector((state: StateProps) => state?.shopping);

	const handleReset = () => {
		toast.success("Reset Cart Successfully!");
		return;
	};

	return (
		<Container className="min-h-[calc(100vh-380px)]">
			<h2 className="text-2xl font-semibold mb-2">Cart</h2>
			<div className="flex flex-col gap-5">
				<CartItem />
				{productData.length > 0 && (
					<div className="flex items-center justify-end">
						<button
							onClick={() => {
								dispatch(resetCart());
								handleReset();
							}}
							className="bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 rounded-[6px] hover:text-white"
						>
							Reset Cart
						</button>
					</div>
				)}
				{/* <===<<=== Paument Cart ===>>===> */}
				{productData?.length !== 0 && <PaymentForm />}
			</div>
			<Toaster />
		</Container>
	);
};

export default CartPage;
