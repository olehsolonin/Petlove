import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "news",
	initialState: {
		items: [],

		// meta для пагинации
		page: 1,
		perPage: 5,
		totalPages: 1,

		// текущий поисковый запрос
		keyword: "",
	},
	reducers: {
		// совместимость: как раньше
		addNews(state, action) {
			state.items = action.payload ?? [];
		},

		setKeyword(state, action) {
			state.keyword = action.payload;
		},

		setPage(state, action) {
			state.page = action.payload;
		},

		// сохраняем полный ответ бэка
		setNewsResponse(state, action) {
			const { results, page, perPage, totalPages } = action.payload || {};

			state.items = results ?? [];
			state.page = page ?? 1;
			state.perPage = perPage ?? state.perPage;
			state.totalPages = totalPages ?? 1;
		},
	},
});

export const { addNews, setKeyword, setPage, setNewsResponse } = slice.actions;
export default slice.reducer;
