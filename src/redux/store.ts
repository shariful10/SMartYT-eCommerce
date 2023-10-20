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
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

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
