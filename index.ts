// const enums, unlike plain enums, don't get compiled into runtime,
// thus you can't access enum member names by index at runtime.
// Any referenced enum members in ts are just transformed into inline literals
const enum Direction {
  North,
  East,
  South,
  West
}

console.log('access by string:', Direction['North']);
// TS flags an error saying enum member can only be accessed by a string literal
// though running via tsx package will allow it
console.log('access by index', Direction[0]);