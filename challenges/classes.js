// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(opts){
//     this.length = opts.length;
//     this.width = opts.width;
//     this.height = opts.height;
//   }


// class Cuboid extends CuboidMaker{
//     constructor(cuboidOpt){
//         super(cuboidOpt)
//         this.volume = function (){
//             return `${opts.length} * ${opts.width} * ${opts.height}`;
//         }
//         this.surfaceArea = function (){
//             return `2 * (${opts.length} * ${opts.width} + ${opts.length} * ${opts.height} + ${opts.width} * ${opts.height})`;
//         }
//     }
// }

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

// CuboidMaker.prototype.Volume = function (){
//     return `${opts.length} * ${opts.width} * ${opts.height}`;
//   }

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

// CuboidMaker.prototype.SurfaceArea = function(){
//     return `2 * (${opts.length} * ${opts.width} + ${opts.length} * ${opts.height} + ${opts.width} * ${opts.height})`;
//   }

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/


class CuboidMaker{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume = function (){
        return this.length * this.width * this.height;
    }
    surfaceArea = function (){
        return 2 * this.length * this.width + this.length * this.height + this.width * this.height;
    }
}



const cuboid = new CuboidMaker(4, 5, 5);
//     dimensions: {
//       length: 4,
//       width: 5,
//       height: 5
//     }
//   });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.height);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.