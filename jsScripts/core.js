import { createViewGrid, renderViewGrid, updateViewGrid } from './rendering/viewGrid.js';
import { createUi, updateUi } from './rendering/Ui.js';

import { createGameObject } from './game/GameObjects.js';
import { createWorldGrid, updateWorldGrid } from './game/worldGrid.js';
import { moveObjectByVector, moveEntityByVector } from './game/moveByVector.js';

const gameState = {
	viewport_data: {
		ui_data: {
			health: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ',
			hunger: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ',
			thirst: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ',
			sanity: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ',
			clothing: 'Police Vest',
			equiped: 'Revolver',
		},
		view_grid_data: {},
	}, //Rendering data
	game_data: {
		world_grid_data: {},
		stats_data: {
			health: 30,
			hunger: 30,
			thirst: 30,
			sanity: 30,
			clothing: 'Police Vest',
			equiped: 'Revolver',
		},
		entity_data: {
			camera: { gx: 12, gy: 12, size: 25 },
		},
		object_data: {},
		temp_data: {
			movement_vector: [0, 0],
		},
	}, //Internal data
	source_data: {
		audio: {},
		config: {
			default_symbol: ' ',
			defaultUndefinedSymbol: '*',
			keyBindings: {
				Right: 'ArrowRight',
				Left: 'ArrowLeft',
				Up: 'ArrowUp',
				Down: 'ArrowDown',
			},
		},
	}, //Audio and config data
};

gameState['viewport_data']['view_grid_data'] = createViewGrid(25, gameState['source_data']['config']['default_symbol']);
gameState['game_data']['world_grid_data'] = createWorldGrid(625, gameState['source_data']['config']['default_symbol']);

createUi();

gameState['game_data']['object_data']['player'] = createGameObject(12, 12, '@', 'normal', 'player', false);

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case gameState['source_data']['config']['keyBindings']['Right']:
			gameState['game_data']['temp_data']['movement_vector'][0] = 1;
			break;

		case gameState['source_data']['config']['keyBindings']['Left']:
			gameState['game_data']['temp_data']['movement_vector'][0] = -1;
			break;

		case gameState['source_data']['config']['keyBindings']['Down']:
			gameState['game_data']['temp_data']['movement_vector'][1] = 1;
			break;

		case gameState['source_data']['config']['keyBindings']['Up']:
			gameState['game_data']['temp_data']['movement_vector'][1] = -1;
			break;

		default:
			break;
	}
});

function gameLoop() {
	moveObjectByVector(
		gameState['game_data']['object_data']['player'],
		gameState['game_data']['temp_data']['movement_vector'],
		gameState['game_data']['world_grid_data'],
		gameState['source_data']['config']['default_symbol']
	);

	moveEntityByVector(gameState['game_data']['entity_data']['camera'], gameState['game_data']['temp_data']['movement_vector']);

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

	updateUi(gameState['viewport_data']['ui_data']);

	fps += 1;
	gameState['game_data']['temp_data']['movement_vector'] = [0, 0];

	requestAnimationFrame(gameLoop);
}

gameLoop();

var fps = 0;
var secondsSinceStart = 0;
var fpsSum = 0;
var averageFPS = 0;

setInterval(() => {
	secondsSinceStart += 1;
	fpsSum += fps;
	averageFPS = fpsSum / secondsSinceStart;
	console.log(`FPS: ${fps} AVERAGE FPS: ${averageFPS}`);
	fps = 0;
	averageFPS = 0;
}, 1000);
