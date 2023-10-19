"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";

const SingleProduct = ({ product }: any) => {
	console.log(product);

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
			<div className="">
				<div className="">
					<p className="text-3xl font-semibold">{product?.title}</p>
					<p className="text-xl font-semibold">
						<FormattedPrice amount={product?.price} />
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
