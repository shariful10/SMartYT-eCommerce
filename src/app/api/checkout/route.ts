import Stripe from "stripe";
import Products from "@/components/Products";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
	// @ts-ignore
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

	try {
		const reqBody = await req.json();
		const { items, email } = await reqBody;
		const existingItems = await items.map((item: Products) => ({
			quantity: item.quantity,
			price_data: {
				currency: "usd",
				unit_amount: item.price * 100,
				product_data: {
					name: item.title,
					description: item.description,
					images: [item.image],
				},
			},
		}));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: existingItems,
            mode: "payment",
            success_url: `${process.env.NEXTAUTH_URL}/success`,
            cancel_url: `${process.env.NEXTAUTH_URL}/checkout`, 
            metadata: {
                email,
            }
        });

		return NextResponse.json({
			message: "Connection is Active",
			status: true,
			id: session.id,
		});
	} catch (err: any) {
		return NextResponse.json({ err: err.message }, { status: 500 });
	}
};
