let ball = document.getElementById('ball');
let obstacle = document.getElementById('obstacle');
let livesElement = document.getElementById('lives');
let lives = 3;

// 设置小球的初始位置
let ballX = 150;
let ballY = 150;

// 监听键盘按键，控制小球移动
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        ballY -= 10;
    } else if (event.key === 'ArrowDown') {
        ballY += 10;
    } else if (event.key === 'ArrowLeft') {
        ballX -= 10;
    } else if (event.key === 'ArrowRight') {
        ballX += 10;
    }

    // 更新小球位置
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';

    // 检查小球是否碰到障碍物
    checkCollision();
});

// 碰撞检测函数
function checkCollision() {
    let ballRect = ball.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    // 检查小球和障碍物是否重叠
    if (
        ballRect.x < obstacleRect.x + obstacleRect.width &&
        ballRect.x + ballRect.width > obstacleRect.x &&
        ballRect.y < obstacleRect.y + obstacleRect.height &&
        ballRect.y + ballRect.height > obstacleRect.y
    ) {
        // 碰到障碍物，掉一格血
        lives -= 1;
        livesElement.innerText = 'Lives: ' + lives;

        // 如果生命值为0，游戏结束
        if (lives === 0) {
            alert('Game Over!');
            resetGame();
        }
    }
}

// 重置游戏
function resetGame() {
    lives = 3;
    livesElement.innerText = 'Lives: ' + lives;
    ballX = 150;
    ballY = 150;
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
}
