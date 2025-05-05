import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	// Ім'я слайсу
	name: "notices",
	// Початковий стан редюсера слайсу
	initialState: {
		categories: [],
		sex: [],
		species: [],
	},
	// Об'єкт case-редюсерів
	reducers: {
		addCategories(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.categories = action.payload;
		},
		addSex(state, action) {
			state.sex = action.payload;
		},
		addSpecies(state, action) {
			state.species = action.payload;
		},

	},
});

// Експортуємо фабрики екшенів
export const { addCategories, addSex, addSpecies } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
