import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import shoppingReducer from "./shoppingSlice";
import { configureStore } from "@reduxjs/toolkit";
import { WebStorage } from "redux-persist/es/types";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export const createPersistStorage = (): WebStorage => {
	const isServer = typeof window === "undefined";
	// <===<<=== Returns noop (dummy) storage
	if (isServer) {
		return {
			getItem() {
				return Promise.resolve(null);
			},
			setItem() {
				return Promise.resolve();
			},
			removeItem() {
				return Promise.resolve();
			},
		};
	}
	return createWebStorage("local");
};

const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createPersistStorage();

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, shoppingReducer);

export const store = configureStore({
	reducer: { shopping: persistedReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
