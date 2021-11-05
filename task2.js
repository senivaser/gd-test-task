function solution2(array) {
    var solutionNumber = 1;
    while (array.indexOf(solutionNumber) !== -1) {
        solutionNumber += 1;
    }
    return solutionNumber;
}
//Для теста использовать команду node task2.js *массив в строке*
console.log(solution2(JSON.parse(process.argv[2]) || []));
