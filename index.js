const container = document.querySelector(".container");
const createGrid = document.querySelector("#grid-button");

createGrid.addEventListener("click", function () {
  const userInput = Number(prompt("Enter a grid size between 2 and 64"));

  if (!userInput) {
    alert("Enter a valid number");
    return;
  }
  removeBlock();
  addBlocks(userInput);
});

function removeBlock() {
  container.innerHTML = "";
}

addBlocks(16);

function createBlocks(blockSize) {
  const block = document.createElement("div");
  const rect = container.getBoundingClientRect();
  console.log(rect);
  block.style.width = `${(rect.width - 4) / blockSize}px`;
  block.style.height = `${(rect.height - 4) / blockSize}px`;
  block.classList.add("pixel");
  container.append(block);
}

function addBlocks(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    createBlocks(`${gridSize}`);
  }
  addBlockHover();
}

function addBlockHover() {
  container.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.classList.contains("pixel") && !target.style.backgroundColor) {
      target.style.backgroundColor = generateRandomColor();
      target.style.opacity = "1";
    } else if (target.style.backgroundColor) {
      if (target.style.opacity > 0) {
        target.style.opacity = `${target.style.opacity - 0.1}`;
      }
    }
  });
}

function generateRandomColor() {
  return `rgb(${createRandomRGB()}, ${createRandomRGB()}, ${createRandomRGB()})`;
}

function createRandomRGB() {
  return Math.round(Math.random() * 255);
}
