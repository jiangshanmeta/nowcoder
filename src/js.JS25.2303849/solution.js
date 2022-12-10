const _isSameSet = (s1, s2) => {
    if (s1.size !== s2.size) {
        return false;
    }
    for (const item of s1) {
        if (!s2.has(item)) {
            return false;
        }
    }
    return true;
};
