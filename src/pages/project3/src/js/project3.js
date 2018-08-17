

var moveTimer = null;


//创建运动界面
function creatSnakeMap (row, col) {
    // 获取分数标签
    var score_div = document.getElementById('score');
    // 获取路径标签
    var snake_map_div = document.getElementById('snake_map');

    //设置行数和列数
    var rowCount = row;//行数
    var colCount = col;//列数

    //界面范围
    var mapwidth = colCount * 20 + 'px';
    var mapHeight = rowCount * 20 + 'px';
    snake_map_div.style.width = mapwidth;
    snake_map_div.style.height = mapHeight;

    //创建数组存储地图上所有 div 的位置
    var snake_div_position = [];
    //循环创建界面
    //创建行div
    for (var i = 0; i < rowCount; i++) {
        var row_div = document.createElement('div');
        // 设置行样式
        row_div.className = 'row';
        // 将行添加到路径地图中
        snake_map_div.appendChild(row_div);
        // 创建数组存储每一行的div
        var row_div_list = [];
        //创建列div
        for (var j = 0; j < colCount; j++) {
            var col_div = document.createElement('div');
            //设置列div样式
            col_div.className = 'col';
            // 将列div添加到路径地图中
            row_div.appendChild(col_div);
            //将列div添加到每一行的行数组中
            row_div_list.push(col_div);
        }
        // 每一行创建完成之后将行添加到地图二位数组中
        snake_div_position.push(row_div_list);
    }

    // 创建蛇模型
    // 创建数组存储蛇身位置
    var snake_list = [];
    // 起始长度为3个div
    for (var i = 0; i < 3; i++) {
        // 设置蛇身样式
        snake_div_position[0][i].className = 'col activeSnake';
        // 将路径存到蛇身数组中
        snake_list[i] = snake_div_position[0][i];
    }


    // 定义变量来控制蛇
    // 设置蛇头的起始位置
    var x = 2;
    var y = 0;
    var scoreCount = 0;// 分数计数器,即吃了多少个果实
    var fruitX = 0;// 记录果实所在的行位置
    var fruitY = 0;// 记录果实所在的列位置;
    //设置控制蛇身参数
    var direction = 'right';// 记录蛇移动的方向,初始为向右
    var changeDir = true;// 判断是否需要改变蛇的移动方向
    var delayTimer = null;// 延迟定时器

    // 添加键盘监听方向键的变化改变蛇的移动方向
    document.onkeydown = function (event) {

        console.log("onkeydown");
        console.log(event);


        // 先判断是否需要改变方向,true表示需要,false表示不需要
        if (!changeDir) {
            return;// return空表示直接结束函数,后续代码不执行
        }
        event = event || window.event;
        // 为了合理处理蛇的移动,需要判断蛇头和蛇身
        // 假设蛇向右移动,点方向键左,右键都不需要做出响应
        if (direction == 'right' && event.keyCode == 37) {
            return;// 终止事件执行
        }
        if (direction == 'left' && event.keyCode == 39) {
            return;
        }
        if (direction == 'up' && event.keyCode == 40) {
            return;
        }
        if (direction == 'down' && event.keyCode == 38) {
            return;
        }
        // 我们通过keyCode确定蛇要移动的方向
        switch (event.keyCode) {
            case 37:
                direction = 'left';// 向左
                break;
            case 38:
                direction = 'up';// 向上;
                break;
            case 39:
                direction = 'right';// 向右
                break;
            case 40:
                direction = 'down';// 向下
                break;
        }
        changeDir = false;
        delayTimer = setTimeout(function() {
            // 设置是否需要改变方向
            changeDir = true;
        }, 100);
    };


    // 设置蛇的移动轨迹
    function snakeMoveTrack() {
        console.log("snakeMoveTrack");
        // 根据上方向来设置蛇头的位置
        switch (direction) {
            case 'left':
                x--;
                break;
            case 'right':
                x++;
                break;
            case 'up':
                y--;
                break;
            case 'down':
                y++;
                break;
        };

        // 判断是否游戏结束
        if (x < 0 || y < 0 || x >= colCount || y >= rowCount) {
            alert('Game Over!!!');
            // 结束蛇移动的定时器
            clearInterval(moveTimer);
            return;// 终止键盘事件;
        }
        // 如果蛇吃到自己,也要结束游戏
        for ( var i = 0; i < snake_list.length; i++) {
            // 将此时蛇头移动后的位置与之前左右的组成蛇的div的位置进行比较,如果相同则说明吃到自己,游戏结束
            if (snake_list[i] == snake_div_position[y][x]) {
                alert('Game over!!!');
                clearInterval(moveTimer);
                return;
            };
        }
        // 判断蛇头移动的位置是否有果实
        if (fruitX == x && fruitY == y) {
            snake_div_position[fruitY][fruitX].className = 'col activeSnake';
            snake_list.push(snake_div_position[fruitY][fruitX]);// 加入蛇身
            scoreCount++;// 记录分数
            // 更新当前的分数
            score_div.innerHTML = scoreCount;
            // 随机产生一个新的果实
            createNewFruit();
        } else {
            // 设置蛇碰不到果实的逻辑
            // 让蛇移动
            // 蛇尾去掉蛇自身的颜色,变成格子的颜色
            snake_list[0].className = 'col';
            // 将蛇尾div从数组中移除
            snake_list.shift();
            // 定位到的新的蛇头加入到蛇数组中
            snake_div_position[y][x].className = 'col activeSnake';
            snake_list.push(snake_div_position[y][x]);
        };
    };



    // 定义一个生成min,max之间的随机数函数
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function createNewFruit() {
        // 随机出新的果实的下标的x和y值
        fruitX = random(0, colCount - 1);
        fruitY = random(0, rowCount - 1);

        // 判断如果随机产生的蛋与蛇身重合,就重新随机产生一个果实
        if (snake_div_position[fruitY][fruitX].className == 'col activeSnake') {
            createNewFruit();// 重新随机新的果实
        } else {
            snake_div_position[fruitY][fruitX].className = 'col fruit';
        }
    };


    createNewFruit();// 在游戏开始的时候生成新的果实
    moveTimer = window.setInterval(snakeMoveTrack, 300);


    var pause = document.getElementById('Pause');
    var start = document.getElementById('Start');
    var refresh = document.getElementById('Refresh');
    var speed = document.getElementById('Speed');
    var speedNum = 0;
    // var speedTime = 300 - (speedNum * 20);

    // 添加暂停按钮
    pause.onclick = function() {
        console.log("pause");
        clearInterval(moveTimer);
    };
    // 添加开始按钮
    start.onclick = function() {
        console.log("start");
        clearInterval(moveTimer);
        moveTimer = window.setInterval(snakeMoveTrack, speedTime(speedNum));
    };
    // 添加刷新按钮
    refresh.onclick = function() {
        console.log("refresh");
        window.location.reload();
    };
    // 添加加速按钮
    speed.onclick = function() {
        console.log("speed");
        speedNum += 1;
        // 获取速度标签
        var speedNum_div = document.getElementById('speedNum');
        speedNum_div.innerHTML = speedNum;
        clearInterval(moveTimer);
        moveTimer = window.setInterval(snakeMoveTrack, speedTime(speedNum));
    };
}


function speedTime(speedNum) {
    return 300 - (speedNum * 20);
}














