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
		for (let y = 1; y < size; y++) {
			for (let x = 1; x < size; x++) {
				view_grid_data[`x${x}y${y}`] = defaultSymbol;
				grid.appendChild(createCell(x, y, defaultSymbol));
			}
		}
		return view_grid_data;
	} catch (error) {
		console.error(error);
	}
}

export { createViewGrid };
