const getData = () => {
	return fetch('./data.json')
		.then(res => res.json())
		.then(data => {
			return data.results.map(pokemones => {
				return {
					id: pokemones.id,
					name: pokemones.name,
					url: pokemones.url,
					types: pokemones.types
				};
			});
		})
		.catch(error => {
			console.log(error);
		});
};

export default getData;