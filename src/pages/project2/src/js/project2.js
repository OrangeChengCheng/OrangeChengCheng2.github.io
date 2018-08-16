

function loadChessViewHtml() {

    // 页面布局
    var htmlStr = "<table cellpadding='0' cellspacing='0' class='js-tableView'>";
    var isBlack = true;
    for (var i = 0; i < 8; i++) {
        htmlStr += "<tr>";
        for (var j = 0; j < 8; j++) {
            isBlack = !isBlack;
            if (isBlack) {
                htmlStr += '<td class="td-black"></td>';
            } else  {
                htmlStr += '<td class="td-white"></td>';
            }
        }
        isBlack = !isBlack;
        htmlStr += "</tr>";
    }
    htmlStr += "</table>";

    console.log(htmlStr);
    //获取界面将布局展示
    var chessViewDiv = document.getElementById('js-chess');

    var tableVieDiv = document.createElement('div');
    tableVieDiv.innerHTML = htmlStr;

    chessViewDiv.insertBefore(tableVieDiv, null);
}