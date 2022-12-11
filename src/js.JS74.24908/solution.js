function captureThreeNumbers (str) {
    const rst = str.match(/(\d{3})/);
    if (rst) {
        return rst[0];
    }
    return false;
}
