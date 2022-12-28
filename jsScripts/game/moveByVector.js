function moveEntityByVector(entity, vector) {
	entity.gx += vector[0];
	entity.gy += vector[1];
}

function moveObjectByVector(object, vector, worldGridData, defaultSymbol) {
	worldGridData[`x${object.gx}y${object.gy}`] = defaultSymbol;
	object.gx += vector[0];
	object.gy += vector[1];
}

export { moveEntityByVector, moveObjectByVector };
