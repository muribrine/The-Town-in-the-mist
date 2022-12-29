import { createViewGrid, renderViewGrid, updateViewGrid } from './rendering/viewGrid.js';
import { createUi, updateUi } from './rendering/Ui.js';
import { playAnimationOnCell } from './rendering/animations.js';

import { createWorldGrid, updateWorldGrid } from './game/worldGrid.js';
import { moveObjectByVector, moveEntityByVector } from './game/moveByVector.js';
import { updateBehaviors } from './game/behaviors.js';

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
		entity_data: {},
		object_data: {},
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
			behaviors: {
				player: function (object, gameState) {
					document.addEventListener('keydown', (e) => {
						switch (e.key) {
							case gameState['source_data']['config']['keyBindings']['Right']:
								object['movement_vector'][0] = 1;
								playAnimationOnCell(12, 12);
								break;

							case gameState['source_data']['config']['keyBindings']['Left']:
								object['movement_vector'][0] = -1;
								playAnimationOnCell(12, 12);
								break;

							case gameState['source_data']['config']['keyBindings']['Down']:
								object['movement_vector'][1] = 1;
								playAnimationOnCell(12, 12);
								break;

							case gameState['source_data']['config']['keyBindings']['Up']:
								object['movement_vector'][1] = -1;
								playAnimationOnCell(12, 12);
								break;

							default:
								break;
						}
					});

					if (object['canMove']) {
						let sucessfulyMoved = moveObjectByVector(
							object,
							object['movement_vector'],
							gameState['game_data']['world_grid_data'],
							gameState['source_data']['config']['default_symbol'],
							gameState['game_data']['object_data']
						);
						if (sucessfulyMoved) object['canMove'] = false;
					}
				},
				zombie: function (object, gameState) {
					moveObjectByVector(
						object,
						object['direction'],
						gameState['game_data']['world_grid_data'],
						gameState['source_data']['config']['default_symbol'],
						gameState['game_data']['object_data']
					);
				},
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
	size: 25,
	layer: 1,
	symbol: '@',
	visualState: 'normal',
	behavior: 'player',
	canMove: true,
	movement_vector: [0, 0],
};

gameState['game_data']['object_data']['zombie'] = {
	gx: 3,
	gy: 3,
	layer: 1,
	symbol: 'Z',
	visualState: 'normal',
	behavior: 'zombie',
	direction: [-1, 0],
};

gameState['game_data']['object_data']['player']['canMove'] = true;

function gameLoop() {
	updateBehaviors(gameState);
	updateWorldGrid(gameState['game_data']['world_grid_data'], gameState['game_data']['object_data']);
	gameState['viewport_data']['view_grid_data'] = updateViewGrid(
		gameState['game_data']['object_data']['player'],
		gameState['game_data']['world_grid_data'],
		gameState['source_data']['config']['defaultUndefinedSymbol']
	);
	renderViewGrid(gameState['viewport_data']['view_grid_data']);
	updateUi(gameState['viewport_data']['ui_data']);
	gameState['game_data']['object_data']['player']['movement_vector'] = [0, 0];

	requestAnimationFrame(gameLoop);
}

gameLoop();

setInterval(() => {
	gameState['game_data']['object_data']['player']['canMove'] = true;
}, 100);
