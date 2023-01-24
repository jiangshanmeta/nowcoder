function multiply (a, b) {
    let f1 = 1; let f2 = 1;
    // 如果存在小树点则乘以他的0的个数f1，f2分别存储a，b的倍数最后先算a*b扩大的在除以抵消掉
    if (String(a).indexOf('.') !== -1) {
        f1 = String(a).length - String(a).indexOf('.') + 1;
        f1 = Math.pow(10, f1);
        a = a * f1;
    }
    if (String(b).indexOf('.') !== -1) {
        f2 = String(b).length - (String(b).indexOf('.') + 1);
        f2 = Math.pow(10, f2);
        b = b * f2;
    }
    return a * b / f1 / f2;
}
