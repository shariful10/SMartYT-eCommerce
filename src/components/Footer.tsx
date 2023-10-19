"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Container from "./Container";
import SocialIcons from "./SocialIcons";
import payment from "@/images/payment.png";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="w-full bg-darkText text-slate-100">
			<Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
				<div className="flex flex-col gap-y-4">
					<Logo />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam, molestias.
					</p>
					<div className="flex items-center gap-x-4">
						<SocialIcons href="https://facebook.com/skshariful.islam.18">
							<BsFacebook className="h-5 w-5" />
						</SocialIcons>
						<SocialIcons href="https://github.com/shariful10">
							<BsGithub className="h-5 w-5" />
						</SocialIcons>
						<SocialIcons href="https://www.linkedin.com/in/md-shariful-islam-3132721b8">
							<FaLinkedinIn className="h-5 w-5" />
						</SocialIcons>
						<SocialIcons href="https://www.fiverr.com/shariful102">
							<TbBrandFiverr className="h-5 w-5" />
						</SocialIcons>
						<SocialIcons href="https://twitter.com/shariful_10">
							<BsTwitter className="h-5 w-5" />
						</SocialIcons>
					</div>
				</div>
				<div>
					<p className="text-lg">Latest Posts</p>
					<ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
						<li className="flex flex-col">
							<span className="text-slate-100 hover:text-blue-500 cursor-pointer duration-200">
								Where Music Is Headed Next
							</span>
							<span className="text-blue-600">
								January 31, 2023
							</span>
						</li>
						<li className="flex flex-col">
							<span className="text-slate-100 hover:text-blue-500 cursor-pointer duration-200">
								Sports Brand New Advertising Campaign
							</span>
							<span className="text-blue-600">
								January 31, 2023
							</span>
						</li>
						<li className="flex flex-col">
							<span className="text-slate-100 hover:text-blue-500 cursor-pointer duration-200">
								Snippets From The Tech Mobile Conference
							</span>
							<span className="text-blue-600">
								January 31, 2023
							</span>
						</li>
						<li className="flex flex-col">
							<span className="text-slate-100 hover:text-blue-500 cursor-pointer duration-200">
								New Music Video Will Blow Your Minds
							</span>
							<span className="text-blue-600">
								January 31, 2023
							</span>
						</li>
					</ul>
				</div>
				<div>
					<p className="text-lg">Quick Links</p>
					<ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
						<Link href="/">
							<li className="hover:text-blue-500 cursor-pointer duration-200">
								Home
							</li>
						</Link>
						<Link href="/cart">
							<li className="hover:text-blue-500 cursor-pointer duration-200">
								Cart
							</li>
						</Link>
						<Link href="/about">
							<li className="hover:text-blue-500 cursor-pointer duration-200">
								About
							</li>
						</Link>
						<Link href="/newsletter">
							<li className="hover:text-blue-500 cursor-pointer duration-200">
								Newsletter
							</li>
						</Link>
						<Link href="/contact">
							<li className="hover:text-blue-500 cursor-pointer duration-200">
								Contact
							</li>
						</Link>
					</ul>
				</div>
				<div>
					<p className="text-lg mb-2">
						Pay us with your trusted services
					</p>
					<Image
						src={payment}
						alt="Payment banner image"
						className="w-full h-10"
					/>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
