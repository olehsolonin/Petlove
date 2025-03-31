// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	// Ім'я слайсу
	name: "news",
	// Початковий стан редюсера слайсу
	initialState: {
		items: [],
	},
	// Об'єкт case-редюсерів
	reducers: {
		addNews(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.items = action.payload;
		},

	},
});

// Експортуємо фабрики екшенів
export const { addNews } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
