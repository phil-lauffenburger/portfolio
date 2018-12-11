const size = 100;

const initialGrid = Array(size).fill().map(()=>Array(size).fill(0)).slice();
const makeNewEmptyArray = size => new Array(size).fill().map(()=>Array(size).fill(0))

export const createInitialGrid = keys => {
  const arr = makeNewEmptyArray(size);
  keys.forEach((key, i) => {
    let yrem = 33;
    if (i > 3) yrem = 66
    let modI = i;
    let xrem = Math.floor(((i+1)/5) * size)%size // .2, .4, .6, .8
    if (modI > 3) xrem += 20;
    arr[xrem][yrem] = key;
  });
  return arr;
}



const reverseMotion = val => val * -1;

const assignNewRandomMotion = () => {
  let rand = Math.round(Math.random());
  if (!rand) rand = -1;
  return rand;
}

const noCollisionDetected = ({ xPos, yPos, newElementPos }) => {
  // let ok = true;
  // let yOut = false;
  // let xOut = false;
  return (!newElementPos[xPos][yPos])
  // now we figure out whether it was y or x that was bad

};

const setElementsInMotion = elementPos => {
  let elementXMotion = initialGrid;
  let elementYMotion = initialGrid;
  for (var i = 0; i < elementPos.length; i++) {
    for (var j = 0; j < elementPos[i].length; j++) {
      // this is a 1 or 0
      if (elementPos[i][j]) {
        // means this is a where a element exists, we give it a y motion and an x motion
        elementXMotion[i][j] = assignNewRandomMotion();
        elementYMotion[i][j] = assignNewRandomMotion()
      }
    }
  }
  return { elementPos, elementXMotion, elementYMotion}
}

// [ 1, 0, 0]
//
//
export const randomMotion = initialState => {
  const { elementPos, elementXMotion, elementYMotion } = initialState;
  if (!elementXMotion) return setElementsInMotion(elementPos);
  let newElementPos = makeNewEmptyArray(elementPos.length);
  let newElementXMotion = makeNewEmptyArray(elementPos.length);
  let newElementYMotion = makeNewEmptyArray(elementPos.length);
  let x;
  let key;
  let y;
  let xPos;
  let yPos;
  let oldx;
  let oldy;
  let valid;
  let validPos;
  let xOut;
  let yOut;
  // let ignoreNewPositions = Array(elementPos.length).fill().map(()=>Array(elementPos[0].length).fill(0));
  for (var i = 0; i < elementPos.length; i++) {
    for (var j = 0; j < elementPos[i].length; j++) {
      if (elementPos[i][j]) {
        key = elementPos[i][j]
        oldx = i
        oldy = j
        x = elementXMotion[i][j];
        y = elementYMotion[i][j];
        xPos = oldx + x;
        yPos = oldy + y;
        // new pos within large x boundary
        validPos = false;
        valid = false;
        xOut = false;
        yOut = false;
        if (elementPos.length - 1 > (xPos) && xPos >= 0) {
          if (elementPos[i].length - 1 > (yPos) && yPos >= 0) {
              validPos = true
            } else {
              yOut = true;
            }
        } else {
          xOut = true;
        }
        if (validPos) {
          if (noCollisionDetected({xPos, yPos, newElementPos})) {
            valid = true;
          } else {
            // default bounce on X
            xOut = true;
          }
        }
        if (valid){
          // here we actually assign the new position, and the new velocities
          newElementPos[xPos][yPos] = key;
          newElementXMotion[xPos][yPos] = x;
          newElementYMotion[xPos][yPos] = y;
        } else {
          newElementPos[oldx][oldy] = key;
          newElementXMotion[oldx][oldy] = xOut ? reverseMotion(x) : x;
          newElementYMotion[oldx][oldy] = yOut ? reverseMotion(y) : y;
        }
      }
    }
  }
  return { elementPos: newElementPos, elementXMotion: newElementXMotion, elementYMotion: newElementYMotion}
}
