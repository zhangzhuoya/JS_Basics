function Fn() {
    var n = 10;
    this.m = 100
    
}
Fn.prototype.aa = function () {
    console.log('aa');
    
}

Fn.bb = function(){
    console.log('bb');
}
// 普通函数执行 有一个私有变量n，和原型以及属性没有关系
Fn();

// 构造函数执行，就是一个类型

var f = new Fn;//this:f
console.log(f.n);//n是私有变量，和实例没有关系
console.log(f.m);//n是私有变量，和实例没有关系
