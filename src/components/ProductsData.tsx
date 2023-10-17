"use client";

import Image from "next/image";
import { ItemProps } from "../../types";

const ProductsData = ({ item }: ItemProps) => {
	console.log(item, "Product");

	return (
		<div className="w-full rounded-lg overflow-hidden">
			<div className="w-full h-96 group overflow-hidden relative">
				<Image
					src={item?.image}
					width={500}
					height={500}
					alt="Product Image"
					className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200 rounded-t-lg"
				/>
			</div>
		</div>
	);
};

export default ProductsData;
