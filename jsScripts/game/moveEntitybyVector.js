function moveEntityByVector(entity, vector) {
	entity.gx += vector[0];
	entity.gy += vector[1];
}

export { moveEntityByVector };
