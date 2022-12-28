function createUiElement(type, className, id, innerText, parent) {
	let element = document.createElement(type);
	element.className = className;
	element.id = id;
	element.innerText = innerText;
	parent.appendChild(element);
	return element;
}

function createUi() {
	let statsContainer = createUiElement('div', 'internal-container', 'stats-container', '', document.getElementById('container'));
	createUiElement('h2', '', '', 'Stats: ', statsContainer);
	createUiElement('label', 'stats-ui', 'health-ui', '', statsContainer);
	createUiElement('label', 'stats-ui', 'hunger-ui', '', statsContainer);
	createUiElement('label', 'stats-ui', 'thirst-ui', '', statsContainer);
	createUiElement('label', 'stats-ui', 'sanity-ui', '', statsContainer);

	//---===---//

	let equipmentContainer = createUiElement('div', 'internal-container', 'equipment-container', '', document.getElementById('container'));
	createUiElement('h2', '', '', 'Equipment: ', equipmentContainer);
	createUiElement('label', 'equipment-ui', 'clothing-ui', '', equipmentContainer);
	createUiElement('label', 'equipment-ui', 'equiped-ui', '', equipmentContainer);

	//---===---//

	createUiElement('h2', '', '', 'Inventory: ', createUiElement('div', 'internal-container', 'inventory-container', '', document.getElementById('container')));

	//---===---//

	createUiElement('h2', '', '', 'Medical: ', createUiElement('div', 'internal-container', 'medical-container', '', document.getElementById('container')));
}

function updateUi(ui_data) {
	document.getElementById('health-ui').innerText = `Health: ${ui_data['health']}`;
	document.getElementById('hunger-ui').innerText = `Hunger: ${ui_data['hunger']}`;
	document.getElementById('thirst-ui').innerText = `Thirst: ${ui_data['thirst']}`;
	document.getElementById('sanity-ui').innerText = `Sanity: ${ui_data['sanity']}`;

	document.getElementById('clothing-ui').innerText = `Clothing: ${ui_data['clothing']}`;
	document.getElementById('equiped-ui').innerText = `Equiped : ${ui_data['equiped']}`;
}

export { createUi, updateUi };
