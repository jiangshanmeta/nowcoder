function base10 (str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = 2 * result + (str[i] === '1' ? 1 : 0);
    }
    return result;
}
