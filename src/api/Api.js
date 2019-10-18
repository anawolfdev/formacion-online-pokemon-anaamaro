const getData = () => {
	return fetch('./data.json')
		.then(res => res.json())
		.then(data => {
			return data.map(pokemones => {
				return {
					id: pokemones.id,
					url: pokemones.url,
					name: pokemones.name,
					types: pokemones.types
				};
			});
		})
		.catch(error => {
			console.log(error);
		});
};

export default getData;