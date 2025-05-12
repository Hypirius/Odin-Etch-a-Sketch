const container = document.querySelector(".container");
console.log(container);

function createBlocks(blockSize) {
  const block = document.createElement("div");
  block.style.width = `${container.offsetWidth / blockSize}px`;
  block.style.height = `${container.offsetHeight / blockSize}px`;
  container.append(block);
}

function addBlocks(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    createBlocks(`${gridSize}`);
  }
  addBlockHover();
}

addBlocks(16);
