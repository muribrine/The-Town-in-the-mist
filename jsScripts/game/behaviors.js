function updateBehaviors(gameState) {
	let objects = gameState['game_data']['object_data'];
	let behaviors = gameState['source_data']['config']['behaviors'];

	for (const objectID in objects) {
		let object = objects[objectID];
		let objectBehavior = behaviors[object.behavior];
		objectBehavior(object, gameState);
	}
}

export { updateBehaviors };
