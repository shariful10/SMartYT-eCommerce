"use client";
import Link from "next/link";
import Image from "next/image";
import { ItemProps } from "../../types";
import { useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import FormattedPrice from "./FormattedPrice";
import { calculatePercentage } from "@/helpers";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/redux/shoppingSlice";
import Toast from "./Toast";

const ProductsData = ({ item }: ItemProps) => {
	const dispatch = useDispatch();

	const starArray = Array.from({ length: item?.rating }, (_, i) => (
		<span key={i} className="text-yellow-400">
			<IoIosStar />
		</span>
	));

	return (
		<div className="w-full rounded-lg overflow-hidden">
			<Link href={{ pathname: "/product", query: { _id: item?._id } }}>
				<div className="w-full h-72 group overflow-hidden relative">
					<Image
						src={item?.image}
						width={500}
						height={500}
						alt="Product Image"
						className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 rounded-t-lg"
					/>
					{item.isNew && (
						<span className="absolute top-2 right-2 font-semibold text-xs py-1 px-3 rounded-full bg-white duration-300 group-hover:bg-blue-500 transition-all group-hover:text-white">
							New Arrival
						</span>
					)}
				</div>
			</Link>
			<div className="border border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
				<p className="font-medium">{item?.title}</p>
				<div className="flex items-center justify-between">
					<div className="border border-blue-500 py-1 px-4 rounded-full text-xs">
						<p className="font-semibold">
							{calculatePercentage(item?.price, item?.oldPrice)}%
							Off
						</p>
					</div>
					<div className="flex items-center gap-x-2">
						<p className="text-slate-500 line-through text-sm">
							<FormattedPrice amount={item?.oldPrice} />
						</p>
						<p className="font-semibold">
							<FormattedPrice amount={item?.price} />
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<button
						onClick={() =>
							dispatch(addToCart(item)) &&
							toast.success(
								`${item?.title.substring(
									0,
									15
								)} added successfully.`
							)
						}
						className="bg-blue-500 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-blue-700 hover:text-white duration-300"
					>
						Add to Card
					</button>
					<div className="flex items-center gap-x-1">{starArray}</div>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export default ProductsData;
