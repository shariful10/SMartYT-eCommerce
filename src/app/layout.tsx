import "./css/globals.css";
import type { Metadata } from "next";
import Header from "./../components/Header";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "shopping-mart",
		default: "Shopping Mart - A place for all!",
	}
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
					<Footer />
				</Layout>
			</body>
		</html>
	);
}
