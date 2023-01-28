randomFn();

function randomFn () {
    let redBalls = document.querySelectorAll('.red .balls-wp b');
    const blueBalls = document.querySelectorAll('.blue .balls-wp b');
    const redParent = document.querySelector('.red .balls-wp');
    const blueParent = document.querySelector('.blue .balls-wp');
    const redRandoms = [];
    let redRandomBalls = [];
    while (redRandoms.length < 6) {
        const random = Math.floor(Math.random() * 33);
        if (!redRandoms.includes(random)) {
            redRandoms.push(random);
            const redBall = redBalls[random];
            redBall.className = 'active';
            redRandomBalls.push(redBall);
        }
    }
    const blueBall = blueBalls[Math.floor(Math.random() * 16)];
    blueBall.className = 'active';
    redRandomBalls = redRandomBalls.sort((a, b) => b.innerHTML - a.innerHTML);
    for (let i = 0; i < 6; i++) {
        redBalls = document.querySelectorAll('.red .balls-wp b');
        redParent.insertBefore(redRandomBalls[i], redBalls[0]);
    }
    blueParent.insertBefore(blueBall, blueBalls[0]);

    return redRandomBalls.map(ball => ball.innerHTML).reverse().join(',') + '|' + blueBall.innerHTML;
}
