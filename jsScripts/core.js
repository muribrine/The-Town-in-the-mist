import { createGrid } from './rendering/createGrid.js';

const gameState = {
	viewport_data: {
		ui_data: {},
		grid_data: {},
	}, //Rendering data
	game_data: {
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

try {
	createGrid(25, '.');
} catch (error) {
	console.error(error);
}
