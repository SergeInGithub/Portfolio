import { configureStore } from '@reduxjs/toolkit';
import { useTheme } from './hooks';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
