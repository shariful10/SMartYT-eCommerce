import Container from "@/components/Container";
import OrderDetails from "@/components/OrderDetails";

const Order = () => {
	return (
		<div className="min-h-[calc(100vh-380px)]">
			<Container>
				<OrderDetails />
			</Container>
		</div>
	);
};

export default Order;
