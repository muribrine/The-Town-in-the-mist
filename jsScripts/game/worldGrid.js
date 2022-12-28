function createWorldGrid(size, defaultSymbol) {
	let world_grid_data = {};

	try {
		for (let y = 0; y < size; y++) {
			for (let x = 0; x < size; x++) {
				let randomNumber = Math.round(Math.random() * 10);
				if (randomNumber < 2) {
					world_grid_data[`x${x}y${y}`] = '*';
				} else {
					world_grid_data[`x${x}y${y}`] = defaultSymbol;
				}
			}
		}
		return world_grid_data;
	} catch (error) {
		console.error(error);
	}
}

function updateWorldGrid(size, world_grid_data, objectData, defaultSymbol) {
	let newWorldGridData = world_grid_data;

	for (const objectID in objectData) {
		let objectGX = objectData[objectID].gx;
		let objectGY = objectData[objectID].gy;
		let objectSymbol = objectData[objectID].symbol;

		newWorldGridData[`x${objectGX}y${objectGY}`] = objectSymbol;
	}

	return newWorldGridData;
}

export { createWorldGrid, updateWorldGrid };
