function solution(s) {
    var n = s.length;
    var char = s[0];
    var count = 0;
    var solutionsCount = 0;
    for (var i = 0; i < n; i++) {
        count += 1;
        if (i + 1 === n || s[i + 1] !== char) {
            solutionsCount += Math.floor(count / 3);
            count = 0;
            if (i + 1 !== n)
                char = s[i + 1];
        }
    }
    return solutionsCount;
}
//Для теста использовать команду node task1.js *строка*
console.log(solution(process.argv[2] || ''));
