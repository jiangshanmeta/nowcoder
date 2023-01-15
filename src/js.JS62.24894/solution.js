function curryIt (fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}
