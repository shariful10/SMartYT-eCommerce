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
			<div>
				<PiCaretLeftLight />
			</div>
		);
	};

	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div>
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
					<BannerText title="Outware Picks" />
				</div>
				<div className="w-full h-full relative">
					<Image
						src={bannerthree}
						alt="Banner image"
						className="w-full h-full relative"
					/>
					<BannerText title="Outware Picks" />
				</div>
			</Slider>
		</div>
	);
};

export default Banner;
