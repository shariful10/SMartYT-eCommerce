import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
	try {
		return NextResponse.json({
			message: "Product fetch successfully",
			success: true,
			productData,
		});
	} catch (error) {
		return NextResponse.json(
			{
				error: "Product data not found",
			},
			{ status: 500 }
		);
	}
};
