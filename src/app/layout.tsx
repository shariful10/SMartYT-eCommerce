import "./css/globals.css";
import type { Metadata } from "next";
import Header from "./../components/Header";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hone | SMartYT",
	description: "The Shopping Mart",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#ECF0F3] text-darkText`}>
				<Layout>
					<Header />
					{children}
				</Layout>
			</body>
		</html>
	);
}
