"use client";

import Image from "next/image";
import { ItemProps } from "../../types";

const ProductsData = ({ item }: ItemProps) => {
	console.log(item, "Product");

	return (
		<div className="w-full rounded-lg overflow-hidden">
			<div className="w-full h-80 group overflow-hidden relative">
				<Image
					src={item?.image}
					width={500}
					height={500}
					alt="Product Image"
					className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200 rounded-t-lg"
				/>
				{item.isNew && (
					<span className="absolute top-2 right-2 font-semibold text-xs py-1 px-3 rounded-full bg-white duration-200 group-hover:bg-orange-600 transition-all group-hover:text-white">
						New Arrival
					</span>
				)}
			</div>
			<div className="border border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
				<p className="font-medium">{item?.title}</p>
				<div className="">
					<div className=""></div>
				</div>
			</div>
		</div>
	);
};

export default ProductsData;
