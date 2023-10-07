import { configureStore } from '@reduxjs/toolkit';
import logicSlice from './logicSlice';

export const store = configureStore({
	reducer: {
		logic: logicSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
