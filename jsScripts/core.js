import { createViewGrid } from './rendering/createViewGrid.js';
import { renderViewGrid } from './rendering/renderViewGrid.js';
import { updateViewGrid } from './rendering/updateViewGrid.js';

import { createGameObject } from './game/createGameObject.js';
import { createWorldGrid } from './game/createWorldGrid.js';
import { updateWorldGrid } from './game/updateWorldGrid.js';

const gameState = {
	viewport_data: {
		ui_data: {},
		view_grid_data: {},
	}, //Rendering data
	game_data: {
		world_grid_data: {},
		stats_data: {},
		entity_data: {
			camera: { gx: 12, gy: 12, size: 25 },
		},
		object_data: {},
		turn_data: {},
	}, //Internal data
	source_data: {
		audio: {},
		config: {
			default_symbol: '.',
			defaultUndefinedSymbol: '*',
		},
	}, //Audio and config data
};

gameState['viewport_data']['view_grid_data'] = createViewGrid(25, gameState['source_data']['config']['default_symbol']);
gameState['game_data']['world_grid_data'] = createWorldGrid(625, gameState['source_data']['config']['default_symbol']);

gameState['game_data']['object_data']['player'] = createGameObject(12, 12, '@', 'normal', 'player', false);

var fps = 0;
var secondsSinceStart = 0;
var fpsSum = 0;
var averageFPS = 0;

gameLoop();

function gameLoop() {
	gameState['game_data']['world_grid_data'] = updateWorldGrid(
		625,
		gameState['game_data']['world_grid_data'],
		gameState['game_data']['object_data'],
		gameState['source_data']['config']['default_symbol']
	);

	gameState['viewport_data']['view_grid_data'] = updateViewGrid(
		gameState['game_data']['entity_data']['camera'],
		gameState['game_data']['world_grid_data'],
		gameState['source_data']['config']['defaultUndefinedSymbol']
	);

	renderViewGrid(gameState['viewport_data']['view_grid_data']);

	fps += 1;

	requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
	let playerGx = gameState['game_data']['object_data']['player'].gx;
	let playerGy = gameState['game_data']['object_data']['player'].gy;

	if (e.key == 'ArrowRight') {
		gameState['game_data']['entity_data']['camera'].gx += 1;
		gameState['game_data']['world_grid_data'][`x${playerGx}y${playerGy}`] = '.';
		gameState['game_data']['object_data']['player'].gx += 1;
	}
	if (e.key == 'ArrowLeft') {
		gameState['game_data']['entity_data']['camera'].gx -= 1;
		gameState['game_data']['world_grid_data'][`x${playerGx}y${playerGy}`] = '.';
		gameState['game_data']['object_data']['player'].gx -= 1;
	}
	if (e.key == 'ArrowUp') {
		gameState['game_data']['entity_data']['camera'].gy -= 1;
		gameState['game_data']['world_grid_data'][`x${playerGx}y${playerGy}`] = '.';
		gameState['game_data']['object_data']['player'].gy -= 1;
	}

	if (e.key == 'ArrowDown') {
		gameState['game_data']['entity_data']['camera'].gy += 1;
		gameState['game_data']['world_grid_data'][`x${playerGx}y${playerGy}`] = '.';
		gameState['game_data']['object_data']['player'].gy += 1;
	}
});

setInterval(() => {
	secondsSinceStart += 1;
	fpsSum += fps;
	averageFPS = fpsSum / secondsSinceStart;
	console.log(`FPS: ${fps} AVERAGE FPS: ${averageFPS}`);
	fps = 0;
	averageFPS = 0;
}, 1000);
