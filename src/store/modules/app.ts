import { defineStore } from 'pinia';

export const useAppStore = defineStore({
	id: 'app',
	state: () => ({
		theme: '',
	}),
	getters: {
		getTheme: state => {
			return state.theme;
		},
	},
	actions: {},
});
