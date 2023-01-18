function createModule (str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt () {
            return this.greeting + ', ' + this.name;
        },
    };
}
