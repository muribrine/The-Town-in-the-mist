import { createViewGrid } from './rendering/createViewGrid.js';
import { renderViewGrid } from './rendering/renderViewGrid.js';

import { createGameObject } from './game/createGameObject.js';
import { createWorldGrid } from './game/createWorldGrid.js';

const gameState = {
	viewport_data: {
		ui_data: {},
		view_grid_data: {},
	}, //Rendering data
	game_data: {
		world_grid_data: {},
		stats_data: {},
		entity_data: {},
		object_data: {},
		turn_data: {},
	}, //Internal data
	source_data: {
		audio: {},
		config: {},
	}, //Audio and config data
};

gameState['viewport_data']['view_grid_data'] = createViewGrid(25, '.');

gameLoop();

function gameLoop() {
	renderViewGrid(gameState['viewport_data']['view_grid_data']);
	requestAnimationFrame(gameLoop);
}
