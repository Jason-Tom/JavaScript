// 定义在方法外任何位置都行
var host = 90;

function myFunction() {
    document.getElementById("demo").innerHTML = "hello world";
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("testtwo")) {
        image.src = "testone.jpg";
    } else {
        image.src = "testtwo.jpg";
    }
}

function chance() {
    x = document.getElementById("change");
    x.innerHTML = "通过innerHTML改变标签显示的内容fgsddg";
}

function chance2() {
    y = document.getElementById("change2");
    y.innerHTML = "通过innerHTML button标签显示的内容";
}

function chance3() {
    y = document.getElementById("change3");
    y.innerHTML = "通过innerHTML 改变label标签显示的内容";
}

function chance4() {
    var y = document.getElementById("change4");
    y.style.color = "blue";
}

function chance5() {
    y = document.getElementById("change5").value;
    if (y == "" || isNaN(y)) {
        alert("请输入数字");
    }
}

function rewrite() {
    document.write("<h1>覆盖测试\
        </h1>");
}

function chance6() {
    var x = 8,
        y = "sf",
        z = 'asdf';
    // 输出要有相应的输出格式
    document.write(x + y + z);
}

function chance7() {
    var car = new Array(),
        i = 0,
        cat = new Array(4, 5, 6),
        dog = Array();
    car[1] = 1;
    car[2] = 2;
    car[3] = 3;
    for (i = 1; i <= 3; i++) {
        document.write("car[" + i + "]" + car[i] + "<br>");
    }
    document.write("<br>");
    for (i = 0; i < 3; i++) {
        document.write("cat[" + i + "]" + cat[i] + "<br>");
    }
    for (i = 1; i <= 10; i++) {
        dog[i] = i;
    }
    document.write("<br>");
    for (i = 1; i <= 10; i++) {
        document.write("dog[" + i + "]" + dog[i] + "<br>");
    }
}

function chance8() {
    var tiger = {
        one: "lalala",
        two: 7899
    }
    var x = document.getElementById("8");
    // innerHTML能输出字符串和变量，字符串是html在html文件上能继续运行
    x.innerHTML = tiger.one + " " + tiger["two"];
}

function chance9() {
    var test = 'asfasd';
    // 对象一定要实现定义
    var lalala = new Object();
    lalala.name = "2013";
    lalala.tall = "176cm";
    lalala.weight = "64kg";
    document.getElementById("9").innerHTML = "test的长度是：" + test.length + "<br>" + lalala.name + " " + lalala.tall + " " + lalala.weight;
    // document.getElementById("9").innerHTML = lalala.name + " " + lalala.tall + " " + lalala.weight;
}
// 有参数的变量，不用定义类型（var也不能放，会被当作变量），直接放入就是调用
function chance10(name, tall) {
    document.getElementById("10").innerHTML = "his name is:" + name + "tall:" + tall;
}

function chance11(name, tall) {
    document.getElementById("11").innerHTML = compute('lalala', 176);
}
// 函数定义可以内嵌
function compute(name, tall) {
    return name + " " + tall;
}

function chance12() {
    // 覆盖全局变量
    // var host = 80;
    document.getElementById("12").innerHTML = "全局变量:" + host;
}

function chance13(a, b) {
    // 运算时数据类型自动转换
    var c = "lalala";
    var d = "hahaha";
    document.getElementById("13").innerHTML = "a+b=" + (a + b) + "<br>" +
        "a*b=" + (a * b) + "<br>" +
        "a/b=" + (a / b) + "<br>" +
        "a%b=" + (a % b) + "<br>" + c + " " + d;
}

function chance14(a, b) {
    if (a > b)
        document.getElementById("14").innerHTML = a + b;
    document.getElementById("14.1").innerHTML = a > b ? a : b;
    var c = 4;
    var d = 5;
    if (a == 5 || c == 7)
        document.getElementById("14.2").innerHTML = a;
}

function chance15(b) {
    // 规范化，变量使用前要定义
    var x = new Date().getDay();
    var y;
    switch (b) {
        case 'a':
            document.getElementById("15.1").innerHTML = "success";
            break;
        default:
            // statements_def
            break;
    }
    switch (x) {
        case 1:
            y = "Taday is Monday";
            break;
        case 2:
            y = "Taday is Tuesday";
            break;
        case 3:
            y = "Taday is Wednesday";
            break;
        case 4:
            y = "Taday is Thursday";
            break;
        case 5:
            y = "Taday is Friday";
            break;
        case 6:
            y = "Taday is Sturday";
            break;
            // 一周的开始是周日
        case 0:
            y = "Taday is Sunday";
            break;
        default:
            break;
    }
    document.getElementById("15").innerHTML = y;
}

function chance16() {
    var _object = {
            name: "tom",
            tall: 176,
            age: 23
        },
        // 定义变量尽量对应号变量类型
        temp = "";
    for (x in _object)
        temp += _object[x] + " ";
    // 输出的数据有多个，先通过一个字符串变量存储再一次性输出
    document.getElementById("16").innerHTML = temp;
}

function chance17() {
    console.log("Hello superman");
    document.getElementById("17").innerHTML = "temp";
}

function chance18() {
    var test = new Array,
        i = 0;
    for (i = 1; i <= 10; i++) {
        test[i] = i;
        if (i == 5)
            break;
        console.log("输出数据：" + test[i]);
    }
    for (i = 1; i <= 10; i++) {
        test[i] = i;
        if (i == 5)
            continue;
        console.log("输出数据：" + test[i]);
    }
    document.getElementById("18").innerHTML = "temp";
}

function chance19() {
    var test = new Array,
        i = 0;
    tiao: {
        console.log('1');
        console.log('2');
        break tiao;
        console.log('3');
    }
    console.log("\n");
    test: for (; i <= 3; i++) {
        if (i == 2) {
            continue test;
        }
        console.log(i);
    }
    document.getElementById("19").innerHTML = "叼叼的break";
}

function chance20() {
    document.getElementById("19").innerHTML = "叼叼的异常测试";
    // throw的异常是自定义的，程序在运行时是没有错误的
    try {
        // 运行错误，无法捕获，能捕获异常一定是有一句句完整的语句
        console.log('this a test!');
        // try捕获的是语法错误
        throw "测试";
        // throw捕获的是自定义错误，前提是程序能运行的
    } catch (e) {
        // e就是前面抛出的异常参数集合
        console.log('提示检测: ' + e);
    }
}

function chance21(conf){
    if (test==null||test=="") {
        alert("请输入用户名");
    }
}
