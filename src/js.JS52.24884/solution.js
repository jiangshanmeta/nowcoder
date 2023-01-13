function count (start, end) {
    console.log(start);
    const timer = setInterval(() => {
        if (start < end) {
            console.log(++start);
        } else {
            clearInterval(timer);
        }
    }, 100);
    return {
        cancel () {
            clearInterval(timer);
        },
    };
}
