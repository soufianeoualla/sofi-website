import { configureStore } from "@reduxjs/toolkit";
import wishlistRedux from "./wishlistRedux";
import cartSlice from "./CartRedux";
import MenuReducer from "./MenuReducer";

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
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
};

const wishlistPersistConfig = {
  key: "wishlist",
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistRedux
);

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
