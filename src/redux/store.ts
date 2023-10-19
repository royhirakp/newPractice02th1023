import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./slices/BookingSlice";
import Rooms from "@/redux/slices/MockData";
import Filterslice from "@/redux/slices/FilterSlice";
// persist
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  Booking: bookingReducer,
  roomArray: Rooms,
  Filterslice: Filterslice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer: {
  //   test: bookingReducer,
  //   testTwo: bookingReducer,
  // },
});

// export type RootState = ReturnType<typeof reducer>;

// export type AppDispatch = typeof store.dispatch;

// LINES FORM REDUX-TOOLKIT WEBSITE
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
