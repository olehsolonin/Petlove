// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const searchFieldSlice = createSlice({
	// Ім'я слайсу
	name: "searchField",
	// Початковий стан редюсера слайсу
	initialState: {
		request: "",
	},
	// Об'єкт case-редюсерів
	reducers: {
		reqResult(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.request = action.payload;
		},

	},
});

// Експортуємо фабрики екшенів
export const { reqResult } = searchFieldSlice.actions;

// Експортуємо редюсер слайсу
export default searchFieldSlice.reducer;
