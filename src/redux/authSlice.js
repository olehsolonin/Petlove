import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			name: null,
			email: null,
		},
		token: null,
		isLoggedIn: false,
	},
	reducers: {
		login(state, action) {
			state.user.name = action.payload.user.name;
			state.user.email = action.payload.user.email;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		logout(state, action) {
			state.user = {
				name: null,
				email: null,
			};
			state.token = null;
			state.isLoggedIn = false;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;