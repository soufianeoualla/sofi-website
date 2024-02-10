import { configureStore } from "@reduxjs/toolkit";
import CartRedux from "./CartRedux";
import wishlistRedux from "./wishlistRedux";
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

const persistedCartReducer = persistReducer(cartPersistConfig, CartRedux);
const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistRedux
);

export const store = configureStore({
  reducer: {
    menu:MenuReducer,
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
