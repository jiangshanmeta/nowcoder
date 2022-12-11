function containsRepeatingLetter (str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1] && /^[a-zA-Z]$/.test(str[i])) {
            return true;
        }
    }
    return false;
}
