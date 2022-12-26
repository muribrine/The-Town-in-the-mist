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

function createGrid(size, defaultSymbol) {
	let grid = document.getElementById('grid');

	try {
		for (let y = 1; y < size; y++) {
			for (let x = 1; x < size; x++) {
				grid.appendChild(createCell(x, y, defaultSymbol));
			}
		}
	} catch (error) {
		console.error(error);
	}
}

export { createGrid };
