import { configureStore } from '@reduxjs/toolkit';
import { newsAllApi } from '../services/NewsServise';

export const store = configureStore({
  reducer: {
    [newsAllApi.reducerPath]: newsAllApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsAllApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
