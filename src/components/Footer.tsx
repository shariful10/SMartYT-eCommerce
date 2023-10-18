import React from "react";
import payment from "@/images/payment.png";
import {
	BsYoutube,
	BsGithub,
	BsLinkedin,
	BsFacebook,
	BsReddit,
} from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="w-full bg-darkText text-slate-100">
			<Container>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="flex flex-col gap-y-4">
						<Logo />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquam, molestias.
						</p>
						<div className="">
							<span className="bg-slate-100 text-darkText p-1 inline-flex items-center rounded-md text-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
								<BsYoutube className="h-5 w-5" />
							</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
