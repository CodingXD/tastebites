import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import { productApi } from "./services/product";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer,
  }, // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
