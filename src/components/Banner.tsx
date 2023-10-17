"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import BannerText from "./BannerText";

const Banner = () => {
	const NextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer transition-all duration-200 rounded-full text-2xl flex items-center z-20 absolute left-5 top-1/2"
				onClick={onClick}
			>
				<PiCaretLeftLight />
			</div>
		);
	};

	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer transition-all duration-200 rounded-full text-2xl flex items-center z-20 absolute right-5 top-1/2"
				onClick={onClick}
			>
				<PiCaretRightLight />
			</div>
		);
	};

	let settings = {
		speed: 500,
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				<div className="w-full h-full relative">
					<Image
						src={bannerone}
						alt="Banner image"
						className="w-full h-full relative"
					/>
					<BannerText title="Outware Picks" />
				</div>
				<div className="w-full h-full relative">
					<Image
						src={bannertwo}
						alt="Banner image"
						className="w-full h-full relative"
					/>
					<BannerText title="Seassional Offers" />
				</div>
				<div className="w-full h-full relative">
					<Image
						src={bannerthree}
						alt="Banner image"
						className="w-full h-full relative"
					/>
					<BannerText title="Best For Men" />
				</div>
			</Slider>
		</div>
	);
};

export default Banner;
