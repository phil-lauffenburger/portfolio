const getX = i => {
  let xrem = Math.floor(((i+1)/4) * width) % width // .2, .4, .6, .8
  return xrem;
}
const getY = i => {
  let yrem = .1 * height;
  if (i > 3) yrem = .6 * height
  return yrem;
}


const width = 1020;
const height = 600;

export const getInitialDisplacePos = ({ keys }) => {
  let elementPos = {};
  keys.forEach((key, i) => {
    elementPos[key] = { xTransform: getX(i), yTransform: getY(i)}
  })
  return { elementPos };
}

export const displace = ({ elementPos, keys }) => {
  const randomKeys = keys.sort(() => Math.round(Math.random()) ? 1 : -1)
  let newElementPos = {};
  randomKeys.forEach((key, i) => {
    newElementPos[key] = { xTransform: getX(i), yTransform: getY(i)}
  })
  return { elementPos: newElementPos }
}
