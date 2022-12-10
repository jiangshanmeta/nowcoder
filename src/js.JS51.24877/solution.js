function duplicates (arr) {
    const set1 = new Set();
    const set2 = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set1.has(arr[i])) {
            set2.add(arr[i]);
        } else {
            set1.add(arr[i]);
        }
    }
    return [...set2,];
}
