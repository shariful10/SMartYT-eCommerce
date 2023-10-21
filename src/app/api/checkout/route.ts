import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		const reqBody = await req.json();
		return NextResponse.json({
			message: "Connection is Active",
			status: true,
			reqBody,
		});
	} catch (err: any) {
		return NextResponse.json({ err: err.message }, { status: 500 });
	}
};
