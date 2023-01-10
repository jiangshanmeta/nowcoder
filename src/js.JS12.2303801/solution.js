const person = {
    level: '2',
    name: '小丽',
    registTime: '2021-11-01',
};
const h2 = document.querySelector('h2');
const _getDuration = registTime => {
    const start = new Date(registTime);
    const end = new Date();
    const dates = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    return dates;
};
h2.innerText = `尊贵的牛客网${person.level}级用户${person.name}您好，您已经注册牛客网${_getDuration(person.registTime)}天啦~`;
