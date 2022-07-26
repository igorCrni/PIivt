import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { AuthStoreReducer, DefaultAuthStoreData } from "./AuthReducer";

const reducer = combineReducers({
    auth: AuthStoreReducer,
});

const AppStore = configureStore({
    reducer: reducer,
    preloadedState: {
        auth: {
            ...JSON.parse(JSON.stringify(DefaultAuthStoreData)),
        },
    },
});

AppStore.subscribe(() => {
    localStorage.setItem('app-store-data', JSON.stringify(AppStore.getState()));
});

export type TAuthStoreDispatch = typeof AppStore.dispatch;

export default AppStore;
