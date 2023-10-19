"use client";

import { store } from "@/redux/store";
import { Provider } from 'react-redux';
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<SessionProvider>{children}</SessionProvider>
		</Provider>
	);
};

export default Layout;
