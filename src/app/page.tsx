import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Home | Shopping Mart",
};

const Home = async () => {
	return (
		<main>
			<Banner />
			<Products />
		</main>
	);
};

export default Home;
