"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import BannerText from "./BannerText";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
	const NextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-white hover:text-white hover:bg-blue-500  cursor-pointer transition-all duration-200 rounded-full text-2xl flex items-center z-20 absolute left-5 top-[35%] md:top-[40%] lg:top-1/2"
				onClick={onClick}
			>
				<FaAngleLeft />
			</div>
		);
	};

	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-white hover:text-white hover:bg-blue-500 cursor-pointer transition-all duration-200 rounded-full text-2xl flex items-center z-20 absolute right-5 top-[35%] md:top-[40%] lg:top-1/2"
				onClick={onClick}
			>
				<FaAngleRight />
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
		nextArrow: <PrevArrow />,
		prevArrow: <NextArrow />,
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				<div className="w-full h-full relative">
					<Image
						src={bannerone}
						alt="Banner image"
						className="w-full h-full relative"
						priority
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
			<div className="absolute w-full h-44" />
		</div>
	);
};

export default Banner;
