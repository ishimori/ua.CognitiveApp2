// This is a JavaScript file
var global_id;
                                          
function test1(){

    nav.popPage();
    
//menu.closeMenu()

    //nav.resetToPage('index.html',{animation:'fade'});

    //ons.findComponent('#myTabbar').setActiveTab(2);

}

function setId(pId){
    global_id = pId;
}
function showId(){
    alert(global_id);
}

function showMap(){
    
    var mapOptions = {
        center: new google.maps.LatLng(35.658892, 139.755286),    //地図上で表示させる緯度経度
        zoom: 14,                                                 //地図の倍率
        mapTypeId: google.maps.MapTypeId.ROADMAP                  //地図の種類
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

}

// --------------------------
