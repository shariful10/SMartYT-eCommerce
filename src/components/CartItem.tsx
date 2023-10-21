import React from "react";
import Image from "next/image";
import {
	decreaseQuantity,
	deleteProduct,
	increaseQuantity,
} from "@/redux/shoppingSlice";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice";
import { AiOutlineClose } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { Products, StateProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CartItem = () => {
	const { productData } = useSelector((state: StateProps) => state?.shopping);
	const dispatch = useDispatch();

	return (
		<>
			{productData?.length > 0 ? (
				<div className="flex flex-col gap-y-2">
					<div className="hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2 rounded-[4px]">
						<p className="w-1/3">Product</p>
						<p className="w-1/3 flex items-center justify-center">
							Quantity
						</p>
						<p className="w-1/3 flex items-center justify-end">
							Subtotal
						</p>
					</div>
					{/* <===<<=== Generate The Product ===>>===> */}
					<div className="flex flex-col gap-y-2">
						{productData?.map((item: Products) => (
							<div
								key={item._id}
								className="w-full bg-white p-4 flex flex-col md:flex-row rounded-[4px] items-center justify-between gap-4"
							>
								<div className="flex items-center gap-x-3 w-full md:w-1/3">
									<span
										onClick={() =>
											dispatch(
												deleteProduct(item?._id)
											) &&
											toast.success(
												`${item?.title} successfully deleted!`
											)
										}
										className="text-lg hover:text-red-600 cursor-pointer duration-300"
									>
										<AiOutlineClose />
									</span>
									<Image
										src={item?.image}
										width={500}
										height={500}
										alt="Product Image"
										className="w-20 h-20 object-cover rounded-[4px]"
										loading="lazy"
									/>
								</div>
								{/* <===<<=== Quantity ===>>===> */}
								<div className="flex items-center justify-start gap-x-3 border border-slate-300 py-2 px-4 w-full md:w-auto">
									<p>Quantity</p>
									<div className="flex items-center text-lg w-20 justify-between">
										<span
											onClick={() =>
												dispatch(decreaseQuantity(item))
											}
											className="cursor-pointer"
										>
											<FiChevronLeft />
										</span>
										<span>{item?.quantity}</span>
										<span
											onClick={() =>
												dispatch(increaseQuantity(item))
											}
											className="cursor-pointer"
										>
											<FiChevronRight />
										</span>
									</div>
								</div>
								<div className="w-full md:w-1/3 flex items-end justify-start md:justify-end">
									<p className="text-lg font-semibold">
										<FormattedPrice
											amount={
												item?.price * item?.quantity
											}
										/>
									</p>
								</div>
							</div>
						))}
					</div>
					<Toaster />
				</div>
			) : (
				<div className="flex flex-col justify-center items-center gap-y-6 bg-white h-96 px-4 rounded-[5px]">
					<p className="text-3xl font-semibold mt-5">
						Your product cart is currently empty!
					</p>
					<Link href={"/"}>
						<button className="bg-black py-3 px-6 rounded-[5px] text-slate-100 hover:bg-blue-600 hover:text-white duration-300">
							Return to shop
						</button>
					</Link>
				</div>
			)}
		</>
	);
};

export default CartItem;
