function createMatrix(edges) {
	
  let max = 0;
	for (let i = 0; i < edges.length; i++) {
		const curMax = Math.max(...edges[i].slice(0, 2));
		curMax > max ? (max = curMax) : null;
	}

	const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));

  for(let el of edges){
    if(el[2] === "directed"){
      result[el[0]][el[1]] = 1

    } else if(el[2] === "undirected"){
      result[el[0]][el[1]] = 1
      result[el[1]][el[0]] = 1
    }
  }

  return result
}