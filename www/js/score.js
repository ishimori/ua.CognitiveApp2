function showScore(){
    
    var fd = document.createDocumentFragment();
    var list = document.getElementById('score_list');

    var row = document.createElement('ons-row');
    var col1 = document.createElement('ons-col');
    var col2 = document.createElement('ons-col');
    var img = document.createElement('img');

    //col1.style.cssText = "width:20%";
    //col2.style.cssText = "width:80%";
    col1.setAttribute('width','70px');
    
    img.setAttribute('src','http://date.ict.miyagi.jp/wp-content/uploads/2017/03/02yuzuru_ishimori_main.jpg');
    img.setAttribute("width","60px");
    
    //col1.innerText = "aaaa";
    col2.innerHTML = "bbbbb<BR>cccccc";
    col2.onclick=function(){
        setId('3'); 
        //nav.pushPage('score_detail.html');
        nav.pushPage('score_detail.html',{id:30});
    }
    
    col1.appendChild(img);
    
    row.appendChild(col1);
    row.appendChild(col2);
    
    fd.appendChild(row);
    
    list.appendChild(fd);
    ons.compile(list);
}

function showScoreDetail(pId){
    
    $("#score_detail").append("<li>" + "id =" + pId + "</li>");
    $("#score_detail").append("<li>" + "笑顔 =" + "70.4" + "</li>");
    $("#score_detail").append("<li>" + "年齢 =" + "28" + "</li>");
    $("#score_detail").append("<li>" + "<img width='300px' src='http://date.ict.miyagi.jp/wp-content/uploads/2017/03/02yuzuru_ishimori_main.jpg' />" + "</li>");
    
}