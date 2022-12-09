function convertToBinary (num) {
    // the runtime in newcoder doesn't support padStart (sad)
    const str = num.toString(2);
    return '0'.repeat(8 - str.length) + str;
}
