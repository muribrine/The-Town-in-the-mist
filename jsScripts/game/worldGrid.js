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

function updateWorldGrid(world_grid_data, objectData) {
	for (const objectID in objectData) {
		world_grid_data[`x${objectData[objectID].gx}y${objectData[objectID].gy}`] = objectData[objectID].symbol;
	}
}

export { createWorldGrid, updateWorldGrid };
