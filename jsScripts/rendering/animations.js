function playAnimationOnCell(x, y) {
	document.getElementById([`x${x}y${y}`]).style.animationName = 'none';

	requestAnimationFrame(() => {
		document.getElementById([`x${x}y${y}`]).style.animationName = '';
	});
}

export { playAnimationOnCell };
