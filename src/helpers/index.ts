export const getProducts = async () => {
	const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");

	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}

	return res.json();
};

export const calculatePercentage = (oldPrice: any, price: any) => {
	return !!parseFloat(price) && !!parseFloat(oldPrice)
		? (100 - (oldPrice / price) * 100).toFixed(0)
		: 0;
};
