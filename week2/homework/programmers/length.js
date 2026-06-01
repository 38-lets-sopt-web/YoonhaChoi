const long = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
const short = [2, 3, 4, 5];

function length(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    return num_list.reduce((acc, cur) => acc * cur, 1);
  }
}

console.log(length(long));
console.log(length(short));
