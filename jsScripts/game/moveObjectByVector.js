function moveObjectByVector(object, vector, worldGridData, defaultSymbol) {
	worldGridData[`x${object.gx}y${object.gy}`] = defaultSymbol;
	object.gx += vector[0];
	object.gy += vector[1];
}

export { moveObjectByVector };
