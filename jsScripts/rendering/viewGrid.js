function createCell(x, y, symbol) {
	try {
		let cell = document.createElement('div');
		cell.innerText = symbol;
		cell.id = `x${x}y${y}`;
		cell.className = 'cell';
		return cell;
	} catch (error) {
		console.error(error);
	}
}

function createViewGrid(size, defaultSymbol) {
	let grid = document.getElementById('grid');

	let view_grid_data = {};

	try {
		for (let y = 0; y < size; y++) {
			for (let x = 0; x < size; x++) {
				view_grid_data[`x${x}y${y}`] = defaultSymbol;
				grid.appendChild(createCell(x, y, defaultSymbol));
			}
		}
		return view_grid_data;
	} catch (error) {
		console.error(error);
	}
}

function renderViewGrid(view_grid_data) {
	try {
		for (const cellID in view_grid_data) {
			document.getElementById(cellID).innerText = view_grid_data[cellID];
		}
	} catch (error) {
		console.error(error);
	}
}

function updateViewGrid(camera, world_grid_data, defaultUndefinedSymbol) {
	let { gx, gy, size } = camera;
	let view_grid_data = {};
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			let tx = gx - 12 + x; //target's X position is the camera´s global X position subtracted from 12 minus the target's local X position
			let ty = gy - 12 + y;

			let cellSymbol0 = world_grid_data['layer0'][`x${tx}y${ty}`];
			let cellSymbol1 = world_grid_data['layer1'][`x${tx}y${ty}`];
			let cellSymbol2 = world_grid_data['layer2'][`x${tx}y${ty}`];

			let cellSymbol = cellSymbol2;
			if (cellSymbol2 == ' ') {
				cellSymbol = cellSymbol1;
				if (cellSymbol1 == ' ') {
					cellSymbol = cellSymbol0;
				}
			}

			if (!cellSymbol) {
				cellSymbol = defaultUndefinedSymbol;
			}

			view_grid_data[`x${x}y${y}`] = cellSymbol;
		}
	}
	return view_grid_data;
}

export { createViewGrid, renderViewGrid, updateViewGrid };
