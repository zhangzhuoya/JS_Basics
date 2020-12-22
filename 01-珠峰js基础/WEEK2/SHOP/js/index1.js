//基于高级单例模式完成业务逻辑开发
let productRender = (function(){ 
    let productBox = document.getElementById('list'),
    headerBox = document.getElementById('header'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = listBox.getElementsByTagName('li');

    let productData = null;
    let requestData = function(){
        let xhr = new XMLHttpRequest;
       
        xhr.open('GET','json/product.json',false);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status == 200){
                productData = JSON.parse(xhr.responseText);
            }
        }
    xhr.send(null) 
    console.log(productData);
    }

    let bindHTML = function(){
        let str =``;
        productData.forEach(({title,
                              price,
                            hot,
                        time,
                    img},index)=> {
           
            
            str += `<li data-price="${price}" 
            data-time="${time}" 
            data-hot="${hot}">
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span>
        </a></li>`

            
        });
        productBox.innerHTML = str;
    }

    // 点击排序
    let clickBIND = function(){
        [].forEach.call(linkList,(curLink,index)=>{
            
       
        linkList.onclick = function(){
let curAry = [].slice.call(linkList);
let ary = ['data-time','data-price','data-hot'];
curAry.sort((a,b)=>{
    let aInn = a.getAttribute(ary[index]);
    let bInn = a.getAttribute(ary[index]);
      if(index===0){
          aInn = aInn.replace(/-/g,'');
          bInn = bInn.replace(/-/g,'');

      }
      return (aInn - bInn)+this.flag;

}) 

        
      

    }
 })
    return {
        init:function(){
            requestData();
            bindHTML();

        }
    }
})();
productRender.init();