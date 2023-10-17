import Banner from "@/components/Banner";
import { getProducts } from "@/helpers";
import React from "react";

const Home = async () => {
	const products = await getProducts();
	console.log(products);

	return (
		<main>
			<Banner />
		</main>
	);
};

export default Home;
