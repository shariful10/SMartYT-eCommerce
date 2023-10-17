import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { getProducts } from "@/helpers";
import React from "react";

const Home = async () => {
	return (
		<main>
			<Banner />
			<Products />
		</main>
	);
};

export default Home;
