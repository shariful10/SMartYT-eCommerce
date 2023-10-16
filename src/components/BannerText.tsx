import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

interface Pops {
	title: string;
}

const BannerText = ({ title }: Pops) => {
	return (
		<div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
			<Container className="flex flex-col gap-y-6 justify-center">
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
				>
					Stock up on sportwear and limited edition collections on our{" "}
					<br /> awesome mid-season sale.
				</motion.p>
			</Container>
		</div>
	);
};

export default BannerText;
