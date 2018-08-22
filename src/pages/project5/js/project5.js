


// ********************* 使用数据  M
var aImg;
var btn;



// ********************* 界面布局  V
function loadUI() {
    aImg = document.getElementById("img");
    btn = document.getElementById("btn");
    //事件绑定
    btn.onclick = eventDown;
}





// ********************* 操作事件   C
function eventDown(e) {
    var evt=e || event;
    btn.innerText = "请点击鼠标（已激活）";

    if(evt.stopPropagation){
        evt.stopPropagation();
    }else{
        evt.cancelBubble = true;
    }

    document.onmousedown = function(e){
        var arr=[];
        var evt=e || event;
        var x=evt.clientX;
        var y=evt.clientY;

        arr.push({X:x,Y:y})

        document.onmousemove = function(e){
            var evt = e || event;
            arr.push({X:evt.clientX,Y:evt.clientY})
            return false;
        }


        document.onmouseup = function(){
            var time = setInterval(function() {
                aImg.style.left = arr[0].X + "px";
                aImg.style.top = arr[0].Y + "px";
                arr.shift();
                if(arr.length == 0){
                    clearTimeout(time);
                }
            },20)
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}