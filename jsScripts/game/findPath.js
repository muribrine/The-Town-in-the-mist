function findPath(pointA, pointB, obstaclesCoordinates) {
	class Node {
		constructor(bObstacle, bVisited, globalGoal, localGoal, x, y, Node, neighbours) {
			this.bObstacle = bObstacle;
			this.bVisited = bVisited;
			this.globalGoal = globalGoal;
			this.localGoal = localGoal;
			this.x = x;
			this.y = y;
			this.parent = Node;
			this.neighbourList = neighbours;
		}
	}

	class Grid {
		constructor(gridSideLenght) {
			let grid = [];

			for (let i = 0; i < gridSideLenght; i++) {
				for (let j = 0; j < gridSideLenght; j++) {
					obstaclesCoordinates.forEach((coordinateSet) => {
						if (coordinateSet[0] == i && coordinateSet[1] == j) {
							grid.push(new Node(true, false, Infinity, Infinity, i, j, undefined, undefined));
						} else {
							grid.push(new Node(false, false, Infinity, Infinity, i, j, undefined, undefined));
						}
					});
				}
			}

			this.grid = grid;
		}
	}

	function addNeighbourListToNode(node, gridSideLenght, grid) {
		let indexOfNode = grid.indexOf(node);
		let neighbourList = [];

		if (indexOfNode - gridSideLenght + 1 > 0) neighbourList.push(grid[indexOfNode - gridSideLenght]); //north
		if (indexOfNode + gridSideLenght < Math.pow(gridSideLenght, 2)) neighbourList.push(grid[indexOfNode + gridSideLenght]); //south
		if (indexOfNode % gridSideLenght != 0) neighbourList.push(grid[indexOfNode - 1]); //west
		if ((indexOfNode + 1) % gridSideLenght != 0) neighbourList.push(grid[indexOfNode + 1]); //east

		node.neighbourList = neighbourList;
	}

	const gridSideLenght = 256;

	const grid = new Grid(gridSideLenght).grid;

	let startingNode = new Node(false, false, Infinity, Infinity, pointA.x, pointA.y, undefined, undefined);
	let endingNode = new Node(false, false, Infinity, Infinity, pointB.x, pointB.y, undefined, undefined);

	addNeighbourListToNode(startingNode, gridSideLenght, grid);
	addNeighbourListToNode(endingNode, gridSideLenght, grid);

	grid.forEach((node) => {
		addNeighbourListToNode(node, gridSideLenght, grid);
	});
}

export { findPath };
