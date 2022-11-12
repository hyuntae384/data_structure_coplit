function queuePrinter(bufferSize, capacities, documents) {
  let buffer = new Array(bufferSize).fill(0)
  let count = 0
  let totalBuffer

  buffer.shift()
  buffer.push(documents[0])
  totalBuffer = documents[0]
  documents = documents.slice(1)
  
  count = count + 1

  while(totalBuffer > 0){
    buffer.shift()
    totalBuffer = buffer.reduce(function(acc, cur){return acc + cur}, 0)

    if(documents.length !== 0 && totalBuffer + documents[0] <= capacities){
      buffer.push(documents[0])
      documents = documents.slice(1)
    } else {
      buffer.push(0)
    }

    totalBuffer = buffer.reduce(function(acc, cur){return acc + cur}, 0)
    count = count + 1
  }

  return count

}