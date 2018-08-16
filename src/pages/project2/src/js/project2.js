
// 棋盘界面布局
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

// 代码展示
function loadCodeViewHtml() {
    //需要展示的代码
    var functionHTMLStr = "<table cellpadding=\"0\" cellspacing=\"0\" class=\"tabelview\">\n" +
        "                <tr>\n" +
        "                    <td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td><td class=\"td-black\"></td><td class=\"td-white\"></td>\n" +
        "                </tr>\n" +
        "            </table>";

    var html_html_Str = "<textarea class='textarea-html'>" + functionHTMLStr + "</textarea>";

    var show_html_div = document.getElementById('codeView-html-id');
    var xmp_html_Div = document.createElement('div');
    xmp_html_Div.innerHTML = html_html_Str;

    show_html_div.insertBefore(xmp_html_Div, null);





    var functionJSStr = "function loadChessViewHtml() {\n" +
        "\n" +
        "    // 页面布局\n" +
        "    var htmlStr = \"<table cellpadding='0' cellspacing='0' class='js-tableView'>\";\n" +
        "    var isBlack = true;\n" +
        "    for (var i = 0; i < 8; i++) {\n" +
        "        htmlStr += \"<tr>\";\n" +
        "        for (var j = 0; j < 8; j++) {\n" +
        "            isBlack = !isBlack;\n" +
        "            if (isBlack) {\n" +
        "                htmlStr += '<td class=\"td-black\"></td>';\n" +
        "            } else  {\n" +
        "                htmlStr += '<td class=\"td-white\"></td>';\n" +
        "            }\n" +
        "        }\n" +
        "        isBlack = !isBlack;\n" +
        "        htmlStr += \"</tr>\";\n" +
        "    }\n" +
        "    htmlStr += \"</table>\";\n" +
        "\n" +
        "    console.log(htmlStr);\n" +
        "    //获取界面将布局展示\n" +
        "    var chessViewDiv = document.getElementById('js-chess');\n" +
        "\n" +
        "    var tableVieDiv = document.createElement('div');\n" +
        "    tableVieDiv.innerHTML = htmlStr;\n" +
        "\n" +
        "    chessViewDiv.insertBefore(tableVieDiv, null);\n" +
        "}";

    var html_js_Str = "<textarea class='textarea-js'>" + functionJSStr + "</textarea>";

    var show_js_div = document.getElementById('codeView-js-id');
    var xmp_js_Div = document.createElement('div');
    xmp_js_Div.innerHTML = html_js_Str;

    show_js_div.insertBefore(xmp_js_Div, xmp_html_Div.nextSibling);

}

