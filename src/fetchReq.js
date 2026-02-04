import axios from 'axios';


axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async ({ keyword = "", page = 1, limit = 5 } = {}) => {
	const response = await axios.get("/news", {
		params: {
			keyword,
			page,
			limit,
		},
	});

	return response.data; // ожидаем { page, perPage, totalPages, results }
};

export const fetchFriends = async () => {
	const response = await axios.get(`/friends`);
	// const response = await axios.get(`?${params}`);
	// console.log(response.data);
	return response.data;
};

export const fetchCategories = async () => {
	const response = await axios.get(`/notices/categories`);
	// const response = await axios.get(`?${params}`);
	// console.log(response.data);
	return response.data;
};

export const fetchSex = async () => {
	const response = await axios.get(`/notices/sex`);
	// const response = await axios.get(`?${params}`);
	// console.log(response.data);
	return response.data;
};

export const fetchSpecies = async () => {
	const response = await axios.get(`/notices/species`);
	// const response = await axios.get(`?${params}`);
	// console.log(response.data);
	return response.data;
};

export const fetchLocations = async () => {
	const response = await axios.get(`/cities/locations`);
	// const response = await axios.get(`?${params}`);
	// console.log(response.data);
	return response.data;
};


export const fetchAllNotices = async (filteredParams = {}, page = 1, limit = 6) => {
	const response = await axios.get("/notices", {
		params: {
			byDate: true,
			page,
			limit,
			...filteredParams,
		},
	});

	return response.data; // { page, perPage, totalPages, results: [] }
};

export const fetchSignup = async (userData) => {
	const response = await axios.post(`/users/signup`, userData);
	// console.log(response.data);
	return response;
};

export const fetchFullUserInfo = async (someToken) => {
	const response = await axios.get(`/users/current/full`, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response.data);
	return response.data;
};

export const fetchSignin = async (userData) => {
	const response = await axios.post(`/users/signin`, userData);
	// console.log(response.data);
	return response;
};

export const fetchEditUser = async (userData, someToken) => {
	// console.log(someToken);
	const response = await axios.patch(`/users/current/edit`, userData, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response);
	return response;
};

export const fetchAddPet = async (petData, someToken) => {
	const response = await axios.post(`/users/current/pets/add`, petData, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response.data);
	return response.data;

};

export const fetchSignOut = async (someToken) => {
	// console.log(someToken);
	const response = await axios.post(`/users/signout`, null, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response.data);
	return response.data;
}

export const fetchDeletePet = async (id, someToken) => {
	try {
		const response = await axios.delete(`/users/current/pets/remove/${id}`, {
			headers: {
				Authorization: `Bearer ${someToken}`,
			},
		});
		// console.log(response.data);
		return response.data.pets;
	} catch (error) {
		console.error('Error deleting pet:', error);

	}
}

export const fetchFullPetInfoById = async (id, someToken) => {
	const response = await axios.get(`/notices/${id}`, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response.data);
	return response.data;
}

export const fetchAddToFavourites = async (id, someToken) => {
	const response = await axios.post(`/notices/favorites/add/${id}`, null, {
		headers: {
			Authorization: `Bearer ${someToken}`,
		},
	});
	// console.log(response.data);
	return response;
}

export const fetchRemoveFromFavourites = async (id, someToken) => {
	const response = await axios.delete(`/notices/favorites/remove/${id}`, {
		headers: { Authorization: `Bearer ${someToken}`, },
	});
	// console.log(response);
	return response;
}