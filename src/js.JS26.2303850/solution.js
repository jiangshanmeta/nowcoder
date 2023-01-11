class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    get area () {
        return this.width * this.height;
    }
}
