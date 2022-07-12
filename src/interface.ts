interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeDoptions = {
  width: 30,
  length: 20,
  height: 10,
};

console.log(drawRectangle(threeDoptions));
