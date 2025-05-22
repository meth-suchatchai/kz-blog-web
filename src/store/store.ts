import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import authReducer, { AuthState } from './features/auth/slice';
import blogReducer from './features/blog/slice';
import '@/lib/reactotron';
import reactotron from '@/lib/reactotron';

// persist config
const persistAuthConfig: PersistConfig<AuthState> = {
  key: 'root',
  storage: storage,
  version: 1,
  whitelist: ['auth'],
};

// wrap auth reducer with persistReducer
const persistAuthReducer = persistReducer(persistAuthConfig, authReducer);

// const createEnhancers = (getDefaultEnhancers: GetDefaultEnhancers<any>) => {

// };

// configure store
export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
  enhancers: (getDefaultEnhancers) => {
    //add reactotron enhancer in development mode
    if (process.env.NODE_ENV === 'development') {
      return getDefaultEnhancers().concat(reactotron.createEnhancer());
    }
    return getDefaultEnhancers();
  },
});

// persist store
export const persistor = persistStore(store);

// hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
