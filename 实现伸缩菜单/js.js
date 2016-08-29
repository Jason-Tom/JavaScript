var p = document.getElementsByTagName('span');
var q = document.getElementsByTagName('ul');

function _click(xi) {
    if (q[xi].style.display == 'block') {
      // ==不同于=
        q[xi].style.display = 'none';
    } else {
        q[xi].style.display = 'block';
    }
}

p[0].onclick = function() {
    _click(0);
};

p[1].onclick = function() {
    _click(1);
};

p[2].onclick = function() {
    _click(2);
};

//方法后面加上括号是执行,
//语句方法放在空方法后面
//html那边能直接传递参数
