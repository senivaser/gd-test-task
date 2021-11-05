function solution(s: string): number {

  const n: number = s.length;
  let char: string = s[0];
  let count: number = 0;
  let solutionsCount: number = 0;

  for (let i: number = 0; i < n; i++) {

    count += 1;

    if (i + 1 === n || s[i + 1] !== char) {
      solutionsCount += Math.floor(count / 3);
      count = 0;
      if (i + 1 !== n) char = s[i + 1];
    }
  }

  return solutionsCount;
}

//Для теста использовать команду node task1.js *строка*
console.log(solution(process.argv[2] || ''));
