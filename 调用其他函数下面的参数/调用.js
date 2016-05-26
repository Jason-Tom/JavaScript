function a() {
    var a, b;
    // 一定要通过this指定，并且不能var定义时，里面有this
    this.a = 9, this.b = 10;
    return this;
}

function b() {
    console.log(a().a+" "+a().b);
}
// console.log("");
// 相当于c语言编译面板
b();
