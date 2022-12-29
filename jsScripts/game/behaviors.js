function updateBehaviors(gameState) {
	let objects = gameState['game_data']['object_data'];
	let behaviors = gameState['source_data']['config']['behaviors'];

	for (var objectID in objects) {
		try {
			var object = objects[objectID];
			if (object['hasBehavior']) {
				var objectBehavior = behaviors[object.behavior];
				objectBehavior(object, gameState);
			}
		} catch (error) {
			if (!objectBehavior) {
				objectBehavior = "ERROR: Could not fine object's Behavior";
			}
			if (!objectID) {
				objectID = 'ERROR: Could not find object';
			}

			console.error(`Error when executing the behavior "${objectBehavior}" in the object of ID '${objectID}'. Error: ${error}`);
		}
	}
}

export { updateBehaviors };
