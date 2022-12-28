function updateUi(ui_data) {
	document.getElementById('health-ui').innerText = `Health: ${ui_data['health']}`;
	document.getElementById('hunger-ui').innerText = `Hunger: ${ui_data['hunger']}`;
	document.getElementById('thirst-ui').innerText = `Thirst: ${ui_data['thirst']}`;
	document.getElementById('sanity-ui').innerText = `Sanity: ${ui_data['sanity']}`;

	document.getElementById('clothing-ui').innerText = `Clothing: ${ui_data['clothing']}`;
	document.getElementById('equiped-ui').innerText = `Equiped : ${ui_data['equiped']}`;
}

export { updateUi };
