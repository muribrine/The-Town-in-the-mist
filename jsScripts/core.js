import { createViewGrid, renderViewGrid, updateViewGrid } from './rendering/viewGrid.js';
import { createUi, updateUi } from './rendering/Ui.js';
import { playAnimationOnCell } from './rendering/animations.js';

import { createWorldGrid, updateWorldGrid } from './game/worldGrid.js';
import { moveObjectByVector, moveEntityByVector } from './game/moveByVector.js';

const gameState = {
	viewport_data: {
		ui_data: {
			health: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
			hunger: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
			thirst: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
			sanity: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
			clothing: 'Police Vest',
			equiped: 'Revolver',
		},
		view_grid_data: {},
	}, //Rendering data
	game_data: {
		world_grid_data: {
			layer0: {},
			layer1: {},
			layer2: {},
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

createUi();

gameState['viewport_data']['view_grid_data'] = createViewGrid(25, gameState['source_data']['config']['default_symbol']);
gameState['game_data']['world_grid_data']['layer0'] = createWorldGrid(625, gameState['source_data']['config']['default_symbol']);
gameState['game_data']['world_grid_data']['layer1'] = createWorldGrid(625, gameState['source_data']['config']['default_symbol']);
gameState['game_data']['world_grid_data']['layer2'] = createWorldGrid(625, gameState['source_data']['config']['default_symbol']);

gameState['game_data']['object_data']['player'] = {
	gx: 12,
	gy: 12,
	layer: 1,
	symbol: '@',
	visualState: 'normal',
	behavior: 'player',
};
gameState['game_data']['object_data']['wall1'] = {
	gx: 4,
	gy: 4,
	layer: 2,
	symbol: '+',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall2'] = {
	gx: 4,
	gy: 5,
	layer: 2,
	symbol: '|',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall3'] = {
	gx: 4,
	gy: 6,
	layer: 2,
	symbol: '|',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall4'] = {
	gx: 4,
	gy: 7,
	layer: 2,
	symbol: '|',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall5'] = {
	gx: 4,
	gy: 8,
	layer: 2,
	symbol: '|',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall6'] = {
	gx: 4,
	gy: 9,
	layer: 2,
	symbol: '+',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall7'] = {
	gx: 5,
	gy: 9,
	layer: 2,
	symbol: '-',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall8'] = {
	gx: 6,
	gy: 9,
	layer: 2,
	symbol: '-',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall9'] = {
	gx: 7,
	gy: 9,
	layer: 2,
	symbol: '-',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['wall10'] = {
	gx: 8,
	gy: 9,
	layer: 2,
	symbol: '+',
	visualState: 'normal',
	behavior: 'wall',
};
gameState['game_data']['object_data']['rat'] = {
	gx: 6,
	gy: 6,
	layer: 0,
	symbol: 'R',
	visualState: 'normal',
	behavior: 'rat',
};
gameState['game_data']['object_data']['loot'] = {
	gx: 7,
	gy: 7,
	layer: 0,
	symbol: '%',
	visualState: 'normal',
	behavior: 'loot',
};
gameState['game_data']['object_data']['zombie'] = {
	gx: 3,
	gy: 3,
	layer: 1,
	symbol: 'Z',
	visualState: 'normal',
	behavior: 'zombie',
};

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case gameState['source_data']['config']['keyBindings']['Right']:
			gameState['game_data']['temp_data']['movement_vector'][0] = 1;
			playAnimationOnCell(12, 12);
			break;

		case gameState['source_data']['config']['keyBindings']['Left']:
			gameState['game_data']['temp_data']['movement_vector'][0] = -1;
			playAnimationOnCell(12, 12);
			break;

		case gameState['source_data']['config']['keyBindings']['Down']:
			gameState['game_data']['temp_data']['movement_vector'][1] = 1;
			playAnimationOnCell(12, 12);
			break;

		case gameState['source_data']['config']['keyBindings']['Up']:
			gameState['game_data']['temp_data']['movement_vector'][1] = -1;
			playAnimationOnCell(12, 12);
			break;

		default:
			break;
	}
});

function gameLoop() {
	let sucessfulyMoved = moveObjectByVector(
		gameState['game_data']['object_data']['player'],
		gameState['game_data']['temp_data']['movement_vector'],
		gameState['game_data']['world_grid_data'],
		gameState['source_data']['config']['default_symbol'],
		gameState['game_data']['object_data']
	);
	if (sucessfulyMoved) {
		moveEntityByVector(gameState['game_data']['entity_data']['camera'], gameState['game_data']['temp_data']['movement_vector']);
	}
	updateWorldGrid(gameState['game_data']['world_grid_data'], gameState['game_data']['object_data']);
	gameState['viewport_data']['view_grid_data'] = updateViewGrid(
		gameState['game_data']['entity_data']['camera'],
		gameState['game_data']['world_grid_data'],
		gameState['source_data']['config']['defaultUndefinedSymbol']
	);
	renderViewGrid(gameState['viewport_data']['view_grid_data']);
	updateUi(gameState['viewport_data']['ui_data']);
	gameState['game_data']['temp_data']['movement_vector'] = [0, 0];

	requestAnimationFrame(gameLoop);
}

gameLoop();
