import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers(
    {
        user: userSlice,
        profile: profileReducer,

    }
);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
export default store;