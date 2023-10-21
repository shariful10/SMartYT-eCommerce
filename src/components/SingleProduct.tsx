"use client";

import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import { MdFavoriteBorder } from "react-icons/md";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {
	const dispatch = useDispatch();

	return (
		<div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
			<div>
				<Image
					src={product?.image}
					height={500}
					width={500}
					alt="Product image"
					className="w-full max-h-[500px] object-cover rounded-lg"
				/>
			</div>
			<div className="flex flex-col justify-center gap-y-10">
				<div className="">
					<p className="text-3xl font-semibold">{product?.title}</p>
					<p className="text-xl font-semibold">
						<FormattedPrice amount={product?.price} />
					</p>
				</div>
				<p className="text-lightText">{product?.description}</p>
				<div className="text-sm text-lightText flex flex-col">
					<span>
						SKU:
						<span className="text-darkText"> {product?._id}</span>
					</span>
					<span>
						Category:
						<span className="text-darkText">
							{" "}
							{product?.category}
						</span>
					</span>
				</div>
				<div
					onClick={() =>
						dispatch(addToCart(product)) &&
						toast.success(
							`${product?.title.substring(
								0,
								15
							)} added successfully.`
						)
					}
					className="flex items-center cursor-pointer group"
				>
					<button className="bg-darkText text-slate-100 px-6 py-3 text-sm rounded-l-[5px] uppercase flex items-center border-r-[1px] border-r-slate-500">
						Add to Cart
					</button>
					<span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-blue-600 duration-300 py-3 rounded-r-[5px]">
						<IoMdCart />
					</span>
				</div>
				<p className="flex items-center gap-x-2 text-sm">
					<MdFavoriteBorder className="text-xl" /> Add to wishlist
				</p>
			</div>
			<Toaster />
		</div>
	);
};

export default SingleProduct;
