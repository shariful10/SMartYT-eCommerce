import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
	return (
		<div className="bg-bodyColor h-20">
			<Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
				<Logo />
				{/* <===<<=== Search Field ===>>===> */}
				<div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
					<FiSearch className="text-gray-500 group-focus-within:text-darkText transition-all duration-200" />
					<input
						type="text"
						placeholder="Search for products"
						className="placeholder:text-sm flex-1 outline-none"
					/>
				</div>
				{/* <===<<=== Login/Register ===>>===> */}
				<div className="headerDiv">
					<AiOutlineUser className="text-2xl" />
					<p className="text-sm font-semibold">Login/Register</p>
				</div>
				{/* <===<<=== Cart Button ===>>===> */}
				<div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 cursor-pointer border border-black hover:border-orange-600 transition-all duration-200 relative">
					<IoMdCart className="text-2xl" />
					<p className="">$0.00</p>
					<span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">0</span>
				</div>
			</Container>
		</div>
	);
};

export default Header;