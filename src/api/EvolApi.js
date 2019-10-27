const getEvolData = () => {
	return fetch('./evoldata.json')
		.then(res => res.json())
		.then(evoldata => {
			return evoldata.map(evolutions => {
				return {
					id: evolutions.id,
					level: evolutions.level,
					species: evolutions.species
				};
			});
		})
		.catch(error => {
			console.log(error);
		});
};

export default getEvolData;

