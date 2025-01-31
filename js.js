const failingMoney = [
    'https://res.cloudinary.com/dg9ottmkb/image/upload/v1738328097/bg2_bc0u7i.png',
    'https://res.cloudinary.com/dg9ottmkb/image/upload/v1738328097/bg2_bc0u7i.png'
];

function createSnowflakes() {
    let snowflakeCount = 0;
    const maxSnowflakes = 30;

    const createInterval = setInterval(() => {
        if (snowflakeCount >= maxSnowflakes) {
            clearInterval(createInterval);
        }

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    let randomNumber = Math.floor(Math.random() * 100);
    const snowflakeImg = document.createElement('img');

    if (randomNumber % 2 === 0){
        snowflakeImg.src = 'assets/bg2.png';
    }
    else {
        snowflakeImg.src = 'assets/bg1.png';
    }
    
    snowflakeImg.style.width = '100%';
    snowflakeImg.style.height = '100%';

    snowflake.appendChild(snowflakeImg);
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 4 + 2}s`;

    document.getElementById('snowfall-container').appendChild(snowflake);
    document.getElementById('snowfall-container').style.display = 'relative';

    snowflakeCount++;
    }, 200);

    setTimeout(() => {
        clearInterval(createInterval);
    }, 15000);
}

window.onload = () => {
    createSnowflakes();
    //playBGM();   
};