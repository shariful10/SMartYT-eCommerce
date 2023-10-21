"use client";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { IoMdCart } from "react-icons/io";
import { useEffect, useState } from "react";
import { BsBookmarks } from "react-icons/bs";
import FormattedPrice from "./FormattedPrice";
import { AiOutlineUser } from "react-icons/ai";
import { Products, StateProps } from "../../types";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const [totalAmount, setTotalAmount] = useState(0);
	const { productData, orderData } = useSelector(
		(state: StateProps) => state.shopping
	);

	useEffect(() => {
		if (session) {
			dispatch(
				addUser({
					name: session?.user?.name,
					email: session?.user?.email,
					image: session?.user?.image,
				})
			);
		} else {
			dispatch(deleteUser());
		}
	}, [dispatch, session]);

	useEffect(() => {
		let amt = 0;
		productData.map((item: Products) => {
			amt += item.price * item.quantity;
			return;
		});
		setTotalAmount(amt);
	}, [productData]);

	return (
		<div className="bg-bodyColor h-20 top-0 sticky z-50">
			<Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
				<Logo />
				{/* <==<<=== Search Field ===>>==> */}
				<div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-blue-500 group">
					<FiSearch className="text-gray-500 group-focus-within:text-darkText transition-all duration-300" />
					<input
						type="text"
						placeholder="Search for products"
						className="placeholder:text-sm flex-1 outline-none"
					/>
				</div>
				{/* <==<<=== Login/Register ===>>==> */}
				{!session && (
					<div onClick={() => signIn()} className="headerDiv">
						<AiOutlineUser className="text-2xl" />
						<p className="text-sm font-semibold">Login/Register</p>
					</div>
				)}
				{/* <==<<=== Cart Button ===>>==> */}
				<Link href="/cart">
					<div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 cursor-pointer border border-black hover:border-blue-500 transition-all duration-300 relative">
						<IoMdCart className="text-2xl" />
						<p className="">
							<FormattedPrice
								amount={totalAmount ? totalAmount : 0}
							/>
						</p>
						<span className="bg-white text-blue-500 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
							{productData ? productData?.length : 0}
						</span>
					</div>
				</Link>
				{/* <==<<=== User Image ===>>==> */}
				{session && (
					<Image
						src={session?.user?.image as string}
						width={45}
						height={45}
						alt="User image"
						className="rounded-full object-cover"
					/>
				)}
				{/* <==<<=== Order Button ===>>==> */}
				{
					// @ts-ignore
					orderData?.order?.length > 0 && session && (
						<Link href={"/orders"}>
							<BsBookmarks className="text-2xl" />
							<p className="text-sm font-semibold">Orders</p>
						</Link>
					)
				}
				{/* <==<<=== Logout Button ===>>==> */}
				{session && (
					<div
						onClick={() => signOut()}
						className="headerDiv px-2 gap-x-1"
					>
						<FiLogOut className="text-2xl" />
						<p className="text-sm font-semibold">Logout</p>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Header;
