import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import { postApiService } from "../slice/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApiService.reducerPath]: postApiService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApiService.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
