function createGameObject(gx, gy, symbol, visualState, behavior, passable) {
	let object = {
		gx: gx,
		gy: gy,
		symbol: symbol,
		visualState: visualState,
		behavior: behavior,
		passable: passable,
	};
	return object;
}

export { createGameObject };
