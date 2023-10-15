import React from "react";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
	return (
		<div className="bg-bodyColor h-20">
			<Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
				<Logo />
			</Container>
		</div>
	);
};

export default Header;
