

function projectListAction(index) {
    console.log("选择了第" + index + "个按钮");
    switch (index)
    {
        case 1 :
        {
            window.location.href = "./src/pages/project1/src/main.html";
        }
        break;
        case 2 :
        {
            window.location.href = "./src/pages/project1/src/classify.html";
        }
            break;
        case 3 :
        {
            window.location.href = "./src/pages/project2/src/project2.html";
        }
            break;
        case 4 :
        {
            window.location.href = "./src/pages/project3/src/project3.html";
        }
            break;
        default:
            break;
    }
}