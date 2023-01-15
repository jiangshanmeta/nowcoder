const _shouldUpdate = (oldVersion, newVersion) => {
    const oldVersionArr = oldVersion.split('.').map(item => +item);
    const newVersionArr = newVersion.split('.').map(item => +item);
    for (let i = 0; i < oldVersionArr.length; i++) {
        const delta = newVersionArr[i] - oldVersionArr[i];
        if (delta > 0) {
            return true;
        } else if (delta < 0) {
            return false;
        }
    }
    return false;
};
