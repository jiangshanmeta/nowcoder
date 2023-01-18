function isAvailableEmail (sEmail) {
    const reg = /^[\w.]+@[\da-z.-]+\.([a-z]+|[\u4E00-\u9FFF]+)$/;
    return reg.test(sEmail);
}
