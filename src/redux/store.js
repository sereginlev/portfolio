import { configureStore } from '@reduxjs/toolkit';

import projects from './slices/projectsSlice';

export const store = configureStore({
	reducer: {
		projects
	}
});