function updateWorldGrid(size, objectData, defaultSymbol) {
	let newWorldGridData = {};

	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			newWorldGridData[`x${x}y${y}`] = defaultSymbol;
		}
	}

	for (const objectID in objectData) {
		let objectGX = objectData[objectID].gx;
		let objectGY = objectData[objectID].gy;
		let objectSymbol = objectData[objectID].symbol;

		newWorldGridData[`x${objectGX}y${objectGY}`] = objectSymbol;
	}

	return newWorldGridData;
}

export { updateWorldGrid };
