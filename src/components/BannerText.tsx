import React, { useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";

interface Pops {
	title: string;
}

const BannerText = ({ title }: Pops) => {
	const [btnHover, setBtnHover] = useState(false);

	return (
		<div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
			<Container className="flex h-full flex-col gap-y-6 justify-center">
				<motion.h2
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="text-7xl font-bold text-white"
				>
					{title}
				</motion.h2>
				<motion.p
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="text-lg text-slate-100"
				>
					Stock up on sportwear and limited edition collections on our{" "}
					<br /> awesome mid-season sale.
				</motion.p>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="flex gap-x-4 mt-2"
				>
					<button
						onMouseOver={() => setBtnHover(true)}
						onMouseLeave={() => setBtnHover(false)}
						className={`py-3 px-6 rounded-full ${
							btnHover
								? "bg-white text-black"
								: "bg-blue-500 text-white"
						} transition-all duration-300 text-sm uppercase font-medium`}
					>
						Find Out More
					</button>
					<button
						onMouseOver={() => setBtnHover(true)}
						onMouseLeave={() => setBtnHover(false)}
						className={`py-3 px-6 rounded-full ${
							btnHover
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						} transition-all duration-300 text-sm uppercase font-medium`}
					>
						Shop Now
					</button>
				</motion.div>
			</Container>
		</div>
	);
};

export default BannerText;
