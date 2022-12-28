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

export { updateWorldGrid };
