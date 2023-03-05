const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets : [],
			favorite: [],
			isLoading: true
		},
		actions: {
			
			getPeopleFetch: async () => {

				setStore({isLoading: true})

				try {await fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => {setStore({people: data.results})
				setStore({isLoading: false})
			})

			}catch (error) {
				console.log('there is a problem with fetch:' + error.message);
				setStore({isLoading: false})
			}
			}, 
			getPlanetsFetch: async () => {

				setStore({isLoading: true})

				try {await fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => {setStore({planets: data.results})
				setStore({isLoading: false})
			})

			}catch (error) {
				console.log('there is a problem with fetch:' + error.message);
				setStore({isLoading: false})
			}
			}, 
			addFavoriteItem: async (item) => {

				setStore({
					favorite: [...getStore().favorite, item]
				})
			},
			removeFavoriteItem: async (index) => {
				const { favorite } = getStore();
				const updatedFavorites = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
				setStore({ favorite: updatedFavorites });
			  }
			
		}
	};
};

export default getState;
