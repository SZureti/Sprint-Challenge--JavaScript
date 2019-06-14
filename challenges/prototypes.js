/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMaker(opts){
    this.length = opts.length;
    this.width = opts.width;
    this.height = opts.height;
  }


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
function Volume(opts){
  CuboidMaker.call(this, opts);
  this.length = opts.length;
  this.width = opts.width;
  this.height = opts.height;
}


Volume.CuboidMaker.prototype = Object.create(CuboidMaker.prototype);
Volume.CuboidMaker.prototype = function (){
  return `${opts.length} * ${opts.width} * ${opts.height}`;
}


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

function SurfaceArea(opts){
  CuboidMaker.call(this, opts);
  this.length = opts.length;
  this.width = opts.width;
  this.height = opts.height;
}
SurfaceArea.CuboidMaker.prototype = Object.create(CuboidMaker.prototype);
SurfaceArea.CuboidMaker.prototype = function(){
  return `2 * (${opts.length} * ${opts.width} + ${opts.length} * ${opts.height} + ${opts.width} * ${opts.height})`;
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// function Cuboid(newkey){
//   CuboidMaker.call(this, newkey);
//   this.length = newkey.length;
//   this.width = newkey.width;
//   this.height = newkey.height;
// }

// let Cuboid = {
//   "length": 4,
//   "width": 5,
//   "height": 5
// }

// Cuboid.prototype = Object.create(CuboidMaker.prototype);


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


