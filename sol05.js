const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function evenORadd(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 3;
  }
}

function another(arr) {
  let result = [];
  arr.forEach((curr) => result.push(curr + 3));
}

evenORadd(scores);
console.log(scores);
console.log(another(scores));
