import { configureStore } from "@reduxjs/toolkit";
import appApi from "../services/appApi";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import productAccount from "../Action/productAccount";
import userAccount from "../Action/userAccount";

// FUCTIONReducers
const Reducer = combineReducers({
    user: userAccount,
    products: productAccount,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "products"],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, Reducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;
