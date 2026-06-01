function concat(num_list) {
  const oddStr = Number(num_list.filter((num) => num % 2 === 1).join(""));
  const evenStr = Number(num_list.filter((num) => num % 2 === 0).join(""));
  return oddStr + evenStr;
}

console.log(concat([3, 4, 5, 2, 1]));
console.log(concat([5, 7, 8, 3]));
