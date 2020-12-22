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
    listBox.innerHTML=str; 
   
}();

// 处理排序
~function(){
    let sortList = function(){
        let arylist = [].slice.call(productList);
        let{index,flag}= this
        
        arylist.sort((a,b)=>{
            let ary = ['data-time','data-price','data-hot']
            let a1 = a.getAttribute(ary[index]);
            let a2 = b.getAttribute(ary[index]);
            if(index===0){
               a1=  a1.replace(/-/g, '');
               a2 = a2.replace(/-/g, '');
            }
            return (a1-a2)*flag;
          
        });
    
    for (let i = 0; i < arylist.length; i++) {
     let a = arylist[i];
     listBox.appendChild(a);

}
 };

 for (let i = 0; i < linkList.length; i++) {
        
     let curList = linkList[i];
     curList.flag = -1;
     curList.index = i;

     console.log('a');
 curList.onclick = function(){  
     for (let j = 0; j < curList.length; i++) {
         let item = curList[j];
         console.log('a');
         if(item!==this){
             item.flag = -1;
         }
         console.log('a');
         
         
     }
  this.flag*=-1
         sortList.call(this);
 }
     
}

    

}();



