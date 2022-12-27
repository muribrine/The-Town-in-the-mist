function createWorldGrid(size, defaultSymbol) {
	let world_grid_data = {};

	try {
		for (let y = 0; y < size; y++) {
			for (let x = 0; x < size; x++) {
				world_grid_data[`x${x}y${y}`] = defaultSymbol;
			}
		}
		return world_grid_data;
	} catch (error) {
		console.error(error);
	}
}

export { createWorldGrid };
