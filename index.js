const container = document.querySelector(".container");
console.log(container);
const rect = container.getBoundingClientRect();
console.log(rect.width);

function createBlocks(blockSize) {
  const block = document.createElement("div");
  block.style.width = `${(rect.width - 4) / blockSize}px`;
  block.style.height = `${(rect.height - 4) / blockSize}px`;
  container.append(block);
}

function addBlocks(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    createBlocks(`${gridSize}`);
  }
  addBlockHover();
}

addBlocks(2);

function addBlockHover() {}
