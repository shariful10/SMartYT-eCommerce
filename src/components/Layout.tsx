"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<SessionProvider>{children}</SessionProvider>
			</PersistGate>
		</Provider>
	);
};

export default Layout;