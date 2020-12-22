let listBox = document.getElementById('list'),
    headerBox = document.getElementById('header'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = listBox.getElementsByTagName('li');

~function(){
    let productData = null;
    let xhr = new XMLHttpRequest;
    xhr.open('GET','json/product.json',false);
    xhr.onreadystatechange = ()=>{
       if(xhr.readyState === 4 && xhr.status === 200){
        productData = xhr.responseText;
        //  console.log(productData)
       }
    }
    xhr.send(null);
    productData = JSON.parse(productData);

    let str = ``;
    for (let i = 0; i < productData.length; i++) {
        let {
            title,
            img,
            price,
            time,
            hot
        } = productData[i];

        str += `<li data-price="${price}" 
                    data-time="${time}" 
                    data-hot="${hot}">
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br/>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span>
        </a></li>`;
     
    } 
   console.log("a");

   listBox.innerHTML=str; 
   
}();
~ function(){
    let list1 = function(){
        let  ary1 = [].slice.call(productList);
        console.log(ary1);
     ary1.sort(function(a,b){
    let p1 = a.getAttribute('data-price');
    let p2 = b.getAttribute('data-price');
    return p1 -p2; 
    })
    for (let index = 0; index < ary1.length; index++) {
        let curLi = ary1[index];
        listBox.appendChild(curLi);
        
    }
}
list1();
   
}();
