

// ********************* 使用数据  M
var aItems = [];//存放box的所有子元素
var titleArr = ["我","不","会","啊","哎","真","不","会","啊"];//创建显示文字数组
var rowSpace = 10;//行间距
var colSpace = 10;//列间距
var oBox;//box div



// ********************* 界面布局  V
function loadUI() {
    //界面布局
    oBox = document.getElementById("box");//获取父界面
    //循环布局
    for (var i = 0;i < 3;i++) {
        for (var j = 0;j < 3;j++) {
            var oDiv = document.createElement("div");//创建小界面
            oBox.appendChild(oDiv);//添加小界面到父界面

            oDiv.style.left = j * (100 + colSpace) + "px";//设置div的x坐标
            oDiv.style.top = i * (100 + rowSpace) + "px";//设置div的y坐标
            oDiv.style.background = this.getrandomColor();//设置div的随机背景颜色
        }
    }

    aItems = oBox.children;//获取父界面的所有子界面
    //循环设置小区块的内容
    for(var i = 0;i < titleArr.length;i++){
        aItems[i].innerHTML = titleArr[i];
    }

    //给每个div绑定事件
    for(var i = 0; i < aItems.length; i++) {
        //鼠标点击事件
        aItems[i].onmousedown = eventDown;
    }
}





// ********************* 操作事件   C
function eventDown(e) {
    var evt = e || event;
    var _left = evt.offsetX;//获取鼠标相对于当前点击div的x坐标  div自身坐标系
    var _top = evt.offsetY;//获取鼠标相对于当前点击div的y坐标 div自身坐标系
    var curNode = this;//获取当前的div元素

    var cloneNode = curNode.cloneNode();//克隆当前元素
    oBox.replaceChild(cloneNode,curNode);//把克隆的元素替换点击区域的元素

    oBox.appendChild(curNode);//将点击区域的元素添加到父视图中

    cloneNode.style.border = "1px dashed #000";//给克隆元素增加边框

    curNode.style.zIndex = 1;//设置z轴的偏移量 将点击原始的元素放在克隆的元素上方

    //鼠标移动事件
    document.onmousemove = function(e) {

        var evt = e || event;
        var curX = evt.clientX; //获取鼠标相当于浏览器的x坐标  浏览器坐标系
        var curY = evt.clientY; //获取鼠标相当于浏览器的y坐标  浏览器坐标系

        var x = curX - _left; // 获取原始div 左上角点的x坐标  浏览器坐标系
        var y = curY - _top;//  获取原始div 左上角点的y坐标  浏览器坐标系

        curNode.style.left = x + "px";//设置原始元素的左上角x坐标
        curNode.style.top = y + "px";//设置原始元素的左上角y坐标

        return false;

    }

    //鼠标松开事件
    document.onmouseup = function(){

        //取拖拽对象距离其他div的一个距离
        //console.log(aItems.length);

        var disArr = [];
        var newArr = [];
        //循环遍历所有子元素
        for(var i = 0; i < aItems.length - 1;i++) {
            var curLeft = curNode.offsetLeft;//获取 原始div 相对于box 的左上角X坐标  box坐标系
            var curTop = curNode.offsetTop;//获取 原始div 相对于box 的左上角Y坐标  box坐标系

            var arriveLeft = aItems[i].offsetLeft;//获 取到达div 相对于box 的左上角X坐标  box坐标系
            var arriveTop = aItems[i].offsetTop;//获取 到达div 相对于box 的左上角Y坐标  box坐标系

            var disX = curLeft - arriveLeft;//原始div和到达div左上角点的 x轴 偏移量
            var disY = curTop - arriveTop;//原始div和到达div左上角点的 y轴 偏移量
            //两点间距离
            var distance = Math.sqrt(Math.pow(disX,2) + Math.pow(disY,2));
            disArr.push(distance);
            newArr.push(distance);
        }

        //数组排序  默认升序
        disArr.sort(function(a,b){
            return a-b;
        })

        var minVal = disArr[0];//去除数组中第一个元素 也就是数值最小的

        var minIndex = newArr.indexOf(minVal);//返回 最小数值对应的区块index

        //交换位置
        curNode.style.left = aItems[minIndex].style.left;
        curNode.style.top = aItems[minIndex].style.top;
        aItems[minIndex].style.left = cloneNode.style.left;
        aItems[minIndex].style.top = cloneNode.style.top;


        oBox.removeChild(cloneNode);//移除克隆的区块

        document.onmousemove = null;
        document.onmouseup = null;
    }
}



// 获取随机颜色
function getrandomColor() {
    return "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")"
}