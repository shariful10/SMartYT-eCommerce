import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
	return (
		<Container className="flex items-center justify-center py-20 min-h-[calc(100vh-380px)]">
			<div className="max-w-2xl flex flex-col items-center justify-center gap-y-5">
				<h2 className="text-7xl font-bold">404!</h2>
				<h2 className="text-4xl font-bold capitalize">
					Your page not found
				</h2>
				<p className="text-base font-medium">
					Oops! The page you are looking for does not exist. It might
					have been move or deleted.
				</p>
				<Link href={"/"}>
					<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-blue-600 hover:text-white duration-300 mt-10">
						Back to Home
					</button>
				</Link>
			</div>
		</Container>
	);
};

export default NotFoundPage;
