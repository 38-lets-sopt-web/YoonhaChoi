const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

function solution(names) {
  return names.filter((_, i) => i % 5 === 0);
}

console.log(solution(names));
