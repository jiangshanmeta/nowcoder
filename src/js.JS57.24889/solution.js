function makeClosures (arr, fn) {
    return arr.map((val) => {
        return () => {
            return fn(val);
        };
    });
}
