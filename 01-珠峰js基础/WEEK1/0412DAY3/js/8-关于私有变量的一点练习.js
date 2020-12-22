var ary = [12, 23];

function fn(ary) {
    console.log(ary);//12,13
    ary[0] = 100;
    ary = [100];//
    ary[0] = 0;
    console.log(ary);
}

fn(ary);
console.log(ary);
