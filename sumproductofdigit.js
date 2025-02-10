var numb = 145;
function sum(num1) {
    var s1 = 0;
    while (num1 > 0) {
        var temp1 = num1 % 10;
        s1 = s1 + temp1;
        num1 = Math.floor(num1 / 10);
    }
    console.log(s1);
}
function pro(num2) {
    var s2 = 1;
    while (num2 > 0) {
        var temp2 = num2 % 10;
        s2 = s2 * temp2;
        num2 = Math.floor(num2 / 10);
    }
    console.log(s2);
}
sum(numb);
pro(numb);
