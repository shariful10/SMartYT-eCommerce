import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Products, StateProps } from "../../types";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
	const { productData } = useSelector((state: StateProps) => state?.shopping);

	return (
		<div className="flex flex-col gap-y-2">
			<div className="hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2 rounded-[4px]">
				<p className="w-1/3">Product</p>
				<p className="w-1/3 flex items-center justify-center">
					Quantity
				</p>
				<p className="w-1/3 flex items-center justify-end">Subtotal</p>
			</div>
			{/* <===<<=== Generate The Product ===>>===> */}
			<div  className="flex flex-col gap-y-2">
				{productData?.map((item: Products) => (
					<div key={item._id} className="w-full bg-white p-4 flex flex-col md:flex-row rounded-[4px] items-center justify-between gap-4">
						<div className="flex items-center gap-x-3 w-full md:w-1/3">
							<span className="text-lg hover:text-red-600 cursor-pointer duration-200">
								<AiOutlineClose />
							</span>
              <Image
									src={item?.image}
									width={500}
									height={500}
									alt="Product Image"
                  className="w-20 h-20 object-cover rounded-[4px]"
								/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CartItem;
