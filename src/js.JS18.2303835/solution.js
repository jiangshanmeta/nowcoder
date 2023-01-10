function Human (name) {
    this.name = name;
    this.kingdom = 'animal';
    this.color = ['yellow', 'white', 'brown', 'black',];
}

Human.prototype.getName = function () {
    return this.name;
};

function Chinese (name, age) {
    Human.call(this, name);
    this.age = age;
    this.color = 'yellow';
}

Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.getAge = function () {
    return this.age;
};
