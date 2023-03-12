import { IABCollection } from "../global";

export const getScriptType = (collection: IABCollection) => {
  let scriptType = collection.scriptTypeAndVersion;
  if (!scriptType && collection.scriptJSON) {
    scriptType = JSON.parse(collection.scriptJSON).type;
  }
  if (scriptType) {
    scriptType = scriptType.replace("p5js", "p5");
    scriptType = scriptType.replace("threejs", "three");
    scriptType = scriptType.replace("paperjs", "paper");
    scriptType = scriptType.replace("tonejs", "tone");
    if (scriptType.indexOf("@") >= 0) {
      scriptType = scriptType.substr(0, scriptType.indexOf("@"));
    }
  }

  return scriptType;
};

export const libraries = {
  p5: "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js",
  three: "https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.min.js",
};

export const defaultCode = `let hashPairs = [];
for (let a = 0; a < 32; a++)
  hashPairs.push(tokenData.hash.slice(2 + 2 * a, 4 + 2 * a));
let decPairs = hashPairs.map((a) => parseInt(a, 16));
let ds = 560;
let z;
function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  z = Math.min(w, h) || ds;
  createCanvas(z, z + 40);
  background(240);
  noLoop();
  noStroke();
}
function draw() {
  let a = map(decPairs[18], 0, 255, 0, 200),
    e = map(decPairs[19], 0, 255, 0, 200),
    s = map(decPairs[20], 0, 255, 100, 255);
  fill(a, e, s);
  quad(0, z, z/3.077, z/3.2, z/2.353, z/2, z/5, z);
  quad(z/2.424, z/4.706, z/2, 0, z/1.176, z/1.429, z/1.509, z/1.429);
  quad(z/3.077, z, z/2.5, z/1.212, z/1.111, z/1.212, z, z);
  fill(0);
  text(" // MINTED BY // " + tokenData.minter, 0, z+25);
}`;

const gameOfLife = `/*
* @name Game of Life
* @description A basic implementation of John Conway's Game of Life CA
* (<a href="http://natureofcode.com">natureofcode.com</a>)
*/

let w;
let columns;
let rows;
let board;
let next;

let ds = 600;

function setup() {
 wd = window.innerWidth;
 he = window.innerHeight;
 ws = Math.min(wd, he) || ds;
 createCanvas(ws, ws);
 w = 20;
 // Calculate columns and rows
 columns = floor(600 / w);
 rows = floor(600 / w);
 // Wacky way to make a 2D array is JS
 board = new Array(columns);
 for (let i = 0; i < columns; i++) {
   board[i] = new Array(rows);
 }
 // Going to use multiple 2D arrays and swap them
 next = new Array(columns);
 for (i = 0; i < columns; i++) {
   next[i] = new Array(rows);
 }
 init();
}

function draw() {
 background(255);
 generate();
 for ( let i = 0; i < columns;i++) {
   for ( let j = 0; j < rows;j++) {
     if ((board[i][j] == 1)) fill(0);
     else fill(255);
     stroke(0);
     rect(i * w, j * w, w-1, w-1);
   }
 }

}

// reset board when mouse is pressed
function mousePressed() {
 init();
}

// Fill board randomly
function init() {
 randomSeed(parseInt(tokenData.hash.slice(4, 14), 16));
 for (let i = 0; i < columns; i++) {
   for (let j = 0; j < rows; j++) {
     // Lining the edges with 0s
     if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
     // Filling the rest randomly
     else board[i][j] = floor(random(2));
     next[i][j] = 0;
   }
 }
}

// The process of creating the new generation
function generate() {

 // Loop through every spot in our 2D array and check spots neighbors
 for (let x = 1; x < columns - 1; x++) {
   for (let y = 1; y < rows - 1; y++) {
     // Add up all the states in a 3x3 surrounding grid
     let neighbors = 0;
     for (let i = -1; i <= 1; i++) {
       for (let j = -1; j <= 1; j++) {
         neighbors += board[x+i][y+j];
       }
     }

     // A little trick to subtract the current cell's state since
     // we added it in the above loop
     neighbors -= board[x][y];
     // Rules of Life
     if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
     else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
     else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
     else                                             next[x][y] = board[x][y]; // Stasis
   }
 }

 // Swap!
 let temp = board;
 board = next;
 next = temp;
}`;
