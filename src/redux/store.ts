import {configureStore} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import {PersistConfig} from "redux-persist/es/types";
import storage from "redux-persist/lib/storage"
import authReducer, {AuthState} from "./features/auth/slice"
import blogReducer from "./features/blog/slice"

const persistConfig: PersistConfig<AuthState> = {
    key: 'auth',
    storage: storage,
}

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        blog: blogReducer,
    }
})

// export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;