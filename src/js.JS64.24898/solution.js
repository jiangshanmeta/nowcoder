function valueAtBit (num, bit) {
    const str = num.toString(2);
    return str[str.length - bit];
}
