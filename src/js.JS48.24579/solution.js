function strLength (s, bUnicode255For1) {
    if (bUnicode255For1) {
        return s.length;
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code > 255) {
            result++;
        }
        result++;
    }
    return result;
}
