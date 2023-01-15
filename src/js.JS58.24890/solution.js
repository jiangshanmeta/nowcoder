function partial (fn, str1, str2) {
    return (str3) => {
        return fn(str1, str2, str3);
    };
}
