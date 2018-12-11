
const colors = [
  '#FDFB33',
  '#030200',
  '#292F3D',
  '#6D9EA7',
  '#572005',
  '#DEF2C8',
  '#C5DAC1',
  '#D8AA96',
  '#F7B1AB'
];


export const assignNewColorLength = skill => {
  let color = '#313131';
  let stateSkill = skill;
  const mod = Math.ceil(Math.random() * 10);
  color = colors[Math.floor(Math.random() * colors.length)]
  stateSkill += mod;
  return {stateSkill, color}
}
