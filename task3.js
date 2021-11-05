var Position = /** @class */ (function () {
    function Position(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle * Math.PI / 180;
    }
    return Position;
}());
/*
  Для того, чтобы один объект оказался в поле зрения другого, необходимо,
чтобы угол между линией центра обзора детектора (биссектриссы угла обзора) и линией,
соединяющей объекты находился в диапазоне φ∈[-уголОбзора/2; +уголОбзора/2].
В условиях данной задачи верно φ∈[-pi/2;+pi/2].

В этом диапазоне углов верно равенство cos φ >= 0, а следовательно
скалярное произведение единичного вектора в направлении линии центра
обзора и вектора с началом в детекторе и концом в объекте потенциального
обнаружения должно быть положительным.

Пусть угол между линией центра обзора (биссектриссы угла обзора) и осью Х
равен α для A и β для B; i, j - единичные векторы в направлении осей x, y;
e - единичный вектор в направлении обзора; l - вектор соединяющий детектор
и объект обнаружения;

Тогда, если детектор A:

  e = i*cosα + j*sinα
  l = i*(B.x - A.x) + j* (B.y - A.y),

то условие будет выглядеть как (e,l) = (B.x - A.x)*cosα + (B.y - A.y)*sinα >= 0   (1)

Если детектор B:

  e = i*cosβ + j*sinβ
  l = i*(A.x - B.x) + j* (A.y - B.y)

то условие будет выглядеть как (e,l) = (A.x - B.x)*cosβ + (A.y - B.y)*sinβ >= 0   (2)

Верность любого из условий должно провоцировать функцию isAlarm возвращать true
*/
function isAlarm(posA, posB) {
    var mA = (posB.x - posA.x) * Math.cos(posA.angle) + (posB.y - posA.y) * Math.sin(posA.angle);
    var mB = (posA.x - posB.x) * Math.cos(posB.angle) + (posA.y - posB.y) * Math.sin(posB.angle);
    // console.log({ posA, posB, mA, mB })
    return (mA >= 0) || (mB >= 0);
}
//Для теста введите node task3.js *A.x* *A.y* *A.angle(в градусах)* *B.x* *B.y* *B.angle(в градусах)*
var argsA = process.argv.slice(2, 5).map(parseFloat);
var argsB = process.argv.slice(5, 8).map(parseFloat);
var posA = new Position(argsA[0], argsA[1], argsA[2]);
var posB = new Position(argsB[0], argsB[1], argsB[2]);
console.log(isAlarm(posA, posB));
