const defaultTheme = require("tailwindcss/defaultTheme");
import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"main-bg": "url('/bg-img.jpeg')",
			},
			fontFamily: {
				bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				bodyColor: "#FBFAF7",
				bgLight: "#1010100D",
				darkText: "#242424",
				lightText: "#A5A5A5",
			},
		},
	},
	plugins: [],
};
export default config;
