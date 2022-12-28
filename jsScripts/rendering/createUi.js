function createUi() {
	let statsContainer = document.createElement('div');
	statsContainer.className = 'internal-container';
	statsContainer.id = 'stats-container';

	let statsH2 = document.createElement('h2');
	statsH2.innerText = 'Stats:';

	let healthUi = document.createElement('label');
	healthUi.className = 'stats-ui';
	healthUi.id = 'health-ui';

	let hungerUi = document.createElement('label');
	hungerUi.className = 'stats-ui';
	hungerUi.id = 'hunger-ui';

	let thirstUi = document.createElement('label');
	thirstUi.className = 'stats-ui';
	thirstUi.id = 'thirst-ui';

	let sanityUi = document.createElement('label');
	sanityUi.className = 'stats-ui';
	sanityUi.id = 'sanity-ui';

	statsContainer.appendChild(statsH2);

	statsContainer.appendChild(healthUi);
	statsContainer.appendChild(hungerUi);
	statsContainer.appendChild(thirstUi);
	statsContainer.appendChild(sanityUi);

	//---===---//

	let equipmentContainer = document.createElement('div');
	equipmentContainer.className = 'internal-container';
	equipmentContainer.id = 'equipment-container';

	let equipmentH2 = document.createElement('h2');
	equipmentH2.innerText = 'Equipment:';

	let clothingUi = document.createElement('label');
	clothingUi.className = 'equipment-ui';
	clothingUi.id = 'clothing-ui';

	let equipedUi = document.createElement('label');
	equipedUi.className = 'equipment-ui';
	equipedUi.id = 'equiped-ui';

	equipmentContainer.appendChild(equipmentH2);

	equipmentContainer.appendChild(clothingUi);
	equipmentContainer.appendChild(equipedUi);

	//---===---//

	let inventoryContainer = document.createElement('div');
	inventoryContainer.className = 'internal-container';
	inventoryContainer.id = 'inventory-container';

	let inventoryH2 = document.createElement('h2');
	inventoryH2.innerText = 'Inventory:';

	inventoryContainer.appendChild(inventoryH2);

	//---===---//

	let medicalContainer = document.createElement('div');
	medicalContainer.className = 'internal-container';
	medicalContainer.id = 'medical-container';

	let medicalH2 = document.createElement('h2');
	medicalH2.innerText = 'Medical:';

	medicalContainer.appendChild(medicalH2);

	//---===---//

	document.getElementById('container').appendChild(statsContainer);
	document.getElementById('container').appendChild(equipmentContainer);
	document.getElementById('container').appendChild(inventoryContainer);
	document.getElementById('container').appendChild(medicalContainer);
}

export { createUi };
