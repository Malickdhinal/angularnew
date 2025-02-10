function Peterson(num) {
    var temp = num;
    var value = 0;
    while (temp > 0) {
        var rem = temp % 10;
        value = value + fact(rem);
        temp = Math.floor(temp / 10);
    }
    if (value == num) {
        console.log("is peterson");
    }
    else {
        console.log("not peterson");
    }
}
function fact(num1) {
    if (num1 == 0 || num1 == 1) {
        return 1;
    }
    else {
        return num1 * fact(num1 - 1);
    }
}
Peterson(200);
