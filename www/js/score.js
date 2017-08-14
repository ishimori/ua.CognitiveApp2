

function showScore(){

    $.ajax({
        url: "https://"+ getter('kintoneSubdomain') + ".cybozu.com/k/v1/records.json",
        method: 'GET',
        headers: {
            "X-Cybozu-API-Token":getter('kintoneToken')
        },
        data:{
            "app":getter('kintoneAppId'),
            "query":"order by スマイル desc "
        }
    }).done(function(data) {
        
        // 検索結果を表示
        showKintoneResult(data.records);
    
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {

        alert(XMLHttpRequest.status);
        alert(textStatus);
        alert(errorThrown);

    });

}
function showKintoneResult(pRec){
    
    var fd = document.createDocumentFragment();
    var list = document.getElementById('score_list');
    
    for (var i=0;i<pRec.length;i++){
        var wRec = pRec[i];
        
        var row = document.createElement('ons-row');
        var col1 = document.createElement('ons-col');
        var col2 = document.createElement('ons-col');
        var img = document.createElement('img');
    
        img.setAttribute('src','http://date.ict.miyagi.jp/wp-content/uploads/2017/03/02yuzuru_ishimori_main.jpg');
        img.setAttribute("width","60px");
        col1.setAttribute('width','70px');
        col1.appendChild(img);
        
        
        col2.innerHTML = wRec["スマホ一覧タイトル"]["value"] + "[id=" + wRec["$id"]["value"] +"]" ;
        
        // パラメータを増やす時はindex.html のscriptを修正
        var wOpt = "{id:"+wRec['$id']['value']+",title:'"+wRec['スマホ一覧タイトル']['value']+"'}";
        col2.setAttribute("onclick","nav.pushPage('score_detail.html',"+ wOpt +");");
        
        
        row.appendChild(col1);
        row.appendChild(col2);
        
        fd.appendChild(row);
    }    
    list.appendChild(fd);
    ons.compile(list);
    
}

function showScore_back2(){
    
    var fd = document.createDocumentFragment();
    var list = document.getElementById('score_list');
    
    for (var i=0;i<20;i++){
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
        col2.innerHTML = i+"bbbbb<BR>cccccc";
        col2.onclick=function(){
            setId('3'); 
            //nav.pushPage('score_detail.html');
            nav.pushPage('score_detail.html',{id:30});
        }
        
        col1.appendChild(img);
        
        row.appendChild(col1);
        row.appendChild(col2);
        
        fd.appendChild(row);
    }    
    list.appendChild(fd);
    ons.compile(list);
}


function showScore_back(){
    
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

function showScoreDetail(pId,pTitle){
    //alert(pId);
    $("#score_detail").append("<li>" + pTitle + "</li>");
    $("#score_detail").append("<li>" + "id =" + pId + "</li>");
//    $("#score_detail").append("<li>" + "笑顔 =" + "70.4" + "</li>");
//    $("#score_detail").append("<li>" + "年齢 =" + "28" + "</li>");
    $("#score_detail").append("<li>" + "<img width='300px' src='http://date.ict.miyagi.jp/wp-content/uploads/2017/03/02yuzuru_ishimori_main.jpg' />" + "</li>");
    
}