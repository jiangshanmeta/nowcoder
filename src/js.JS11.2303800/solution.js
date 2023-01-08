const people = [
    { name: '牛油1号',
        id: 1,
        age: 20, },
    { name: '牛油2号',
        id: 2,
        age: 21, },
    { name: '牛油3号',
        id: 3,
        age: 19, },
];
const ul = document.querySelector('ul');
ul.innerHTML = people.map(item => `<li>${item.name} ${item.age}岁</li>`).join('');
