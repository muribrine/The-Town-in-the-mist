function moveEntityByVector(entity, vector) {
	let targetX = entity.gx + vector[0];
	let targetY = entity.gy + vector[1];

	if (targetX >= 0 && targetY >= 0) {
		if (targetX <= 624 && targetY <= 624) {
			entity.gx += vector[0];
			entity.gy += vector[1];
		}
	}
}

function moveObjectByVector(object, vector, worldGridData, defaultSymbol, objectData) {
	worldGridData[`layer${object.layer}`][`x${object.gx}y${object.gy}`] = defaultSymbol;

	let targetX = object.gx + vector[0];
	let targetY = object.gy + vector[1];

	let canMove = true;

	for (const objectID in objectData) {
		if (objectData[objectID].gx == targetX && objectData[objectID].gy == targetY && objectData[objectID].layer >= object.layer) {
			canMove = false;
		}
	}

	if (targetX >= 0 && targetY >= 0) {
		if (targetX <= 624 && targetY <= 624) {
			object.gx += vector[0] * canMove;
			object.gy += vector[1] * canMove;
		}
	}

	return canMove;
}

export { moveEntityByVector, moveObjectByVector };
