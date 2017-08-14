// This is a JavaScript file
// ------------------------------------
//   タブバー切り替えイベント
// ------------------------------------
function tabbar_change(pTab){
    // この方式だと、まだページがロードされていないため、
    // 遷移先のDOMを操作することができない
    switch (pTab.getAttribute('page')){
        case 'camera.html':
            //alert('camera');
            break;
        case 'score.html':
            //alert('score');
            break;
        case 'map.html':
            //alert('map');
            //showMap();
            break;
        case '':
            alert('');
            break;
            
    }
}