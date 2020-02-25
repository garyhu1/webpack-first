import _ from 'lodash';
import "./main.css";
import Icon from "./assets/images/bg.jpg"
import Data from "./assets/data.xml";
import printMe from "./print.js"

function component() {
    var element = document.createElement('div');
    let btn = document.createElement("button");

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // btn
    btn.innerHTML = "click me and check the console!"

    btn.onclick = printMe;

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("myicon")

    element.appendChild(myIcon);

    element.appendChild(btn)

    console.log(Data)

    return element;

}

document.body.appendChild(component());