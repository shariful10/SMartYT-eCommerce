import Container from "@/components/Container";
import { getSingleProduct, getTrendingProducts } from "@/helpers";
import { Products } from "../../../types";
import ProductsData from "@/components/ProductsData";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
	const _idString = searchParams?._id;
	const id = Number(_idString);
	const product = getSingleProduct(id);
	const data = await getTrendingProducts();

	return (
		<Container>
			<div className="">
				<p className="">Tranding Products</p>
				<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
					{data?.map((item: Products) => (
						<ProductsData key={item._id} item={item} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default ProductPage;
