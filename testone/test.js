// �����ڷ������κ�λ�ö���
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
    x.innerHTML = "ͨ��innerHTML�ı��ǩ��ʾ������";
}

function chance2() {
    y = document.getElementById("change2");
    y.innerHTML = "ͨ��innerHTML button��ǩ��ʾ������";
}

function chance3() {
    y = document.getElementById("change3");
    y.innerHTML = "ͨ��innerHTML �ı�label��ǩ��ʾ������";
}

function chance4() {
    var y = document.getElementById("change4");
    y.style.color = "blue";
}

function chance5() {
    y = document.getElementById("change5").value;
    if (y == "" || isNaN(y)) {
        alert("����������");
    }
}

function rewrite() {
    document.write("<h1>���ǲ���\
        </h1>");
}

function chance6() {
    var x = 8,
        y = "sf",
        z = 'asdf';
    // ���Ҫ����Ӧ�������ʽ
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
    // innerHTML������ַ����ͱ������ַ�����html��html�ļ����ܼ�������
    x.innerHTML = tiger.one + " " + tiger["two"];
}

function chance9() {
    var test = 'asfasd';
    // ����һ��Ҫʵ�ֶ���
    var lalala = new Object();
    lalala.name = "2013";
    lalala.tall = "176cm";
    lalala.weight = "64kg";
    document.getElementById("9").innerHTML = "test�ĳ����ǣ�" + test.length + "<br>" + lalala.name + " " + lalala.tall + " " + lalala.weight;
    // document.getElementById("9").innerHTML = lalala.name + " " + lalala.tall + " " + lalala.weight;
}
// �в����ı��������ö������ͣ�varҲ���ܷţ��ᱻ������������ֱ�ӷ�����ǵ���
function chance10(name, tall) {
    document.getElementById("10").innerHTML = "his name is:" + name + "tall:" + tall;
}

function chance11(name, tall) {
    document.getElementById("11").innerHTML = compute('lalala', 176);
}
// �������������Ƕ
function compute(name, tall) {
    return name + " " + tall;
}

function chance12() {
    // ����ȫ�ֱ���
    // var host = 80;
    document.getElementById("12").innerHTML = "ȫ�ֱ���:" + host;
}

function chance13(a, b) {
    // ����ʱ���������Զ�ת��
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
    // �淶��������ʹ��ǰҪ����
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
            // һ�ܵĿ�ʼ������
        case 0:
            y = "Taday is Sunday";
            break;
        default:
            break;
    }
    document.getElementById("15").innerHTML = y;
}

function chance16() {
    var _object = { name: "tom", tall: 176, age: 23 },
    // �������������Ӧ�ű�������
        temp="";
    for (x in _object) 
        temp += _object[x] + " ";
    // ����������ж������ͨ��һ���ַ��������洢��һ�������
    document.getElementById("16").innerHTML = temp;
}
