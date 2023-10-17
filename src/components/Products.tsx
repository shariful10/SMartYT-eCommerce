import { getProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products } from "../../types";


const Products = async () => {
	const products = await getProducts();

	return (
		<Container className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-5">
			{products?.map((item: Products) => (
				<ProductsData key={item._id} item={item} />
			))}
		</Container>
	);
};

export default Products;
