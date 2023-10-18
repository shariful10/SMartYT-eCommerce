import Link from "next/link";
import React from "react";
interface Props {
	children: React.ReactNode;
	href: string;
}

const SocialIcons = ({ children, href }: Props) => {
	return (
		<div>
			<Link href={href} target="_blank">
				<span className="bg-slate-100 text-darkText p-1 inline-flex items-center rounded-md text-lg hover:bg-blue-600 hover:text-white cursor-pointer duration-200">
					{children}
				</span>
			</Link>
		</div>
	);
};

export default SocialIcons;
