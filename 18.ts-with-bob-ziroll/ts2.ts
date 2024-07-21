const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops", "whiskers", "coppe"];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
