function renderViewGrid(view_grid_data) {
	try {
		for (const cellID in view_grid_data) {
			document.getElementById(cellID).innerText = view_grid_data[cellID];
		}
	} catch (error) {
		console.error(error);
	}
}

export { renderViewGrid };
