function fizzBuzz (num) {
    if (typeof num !== 'number') {
        return false;
    }
    const mod3 = num % 3 === 0;
    const mod5 = num % 5 === 0;
    if (mod3 && mod5) {
        return 'fizzbuzz';
    }
    if (mod3) {
        return 'fizz';
    }
    if (mod5) {
        return 'buzz';
    }
    return num;
}
