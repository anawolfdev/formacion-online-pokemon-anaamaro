const getData = () => {
	return fetch('./data.json')
		.then(res => res.json())
		.then(data => {
			return data.map(pokemones => {
				return {
					id: pokemones.id,
					height: pokemones.height,
					weight: pokemones.weight,
					url: pokemones.url,
					name: pokemones.name,
					types: pokemones.types,
					abilities: pokemones.abilities
				};
			});
		})
		.catch(error => {
			console.log(error);
		});
};

export default getData;