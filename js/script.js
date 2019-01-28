const strUrl = window.location.href;
const objUrl = new URL(strUrl);
const type = objUrl.searchParams.get('type');

var types = ['classic', 'graphing', 'geometry', '3d'];

if(type == undefined || !types.includes(type)){
    window.location.replace('/?type=graphing');
}

function addOnGeogrebra(objectName){
    let ggb = window['ggbApplet'];
    let type = ggb.getObjectType(objectName);
    console.log(type);

    if(type == 'point') {
        let coordX = ggb.getXcoord(objectName);
        let coordY = ggb.getYcoord(objectName);
        ggb.setCoords(objectName, coordX, coordY);
    }
};

var callback = function(api){
    api.registerAddListener('addOnGeogrebra');
};

var parameters = {};

if(type == 'classic')
{
    const mode = objUrl.searchParams.get('mode');

    parameters = {
        "id": "graphing-id",
        "width": window.innerWidth,
        "height": window.innerHeight,
        "perspective": mode,
        "showToolBar": true,
        "showAlgebraInput": true,
        "showMenuBar": true,
        "appletOnLoad": callback,
    };
}
else 
{
    parameters = {
        "id": "ggbApplet",
        "appName": type,
        "width": window.innerWidth,
        "height": window.innerHeight,
        "showToolBar": true,
        "showAlgebraInput": true,
        "showMenuBar": false,
        "showToolBarHelp": true,
        "showZoomButtons": true,
        "allowStyleBar": true,
        "showFullscreenButton": true,
        "language":"es",
        "appletOnLoad": callback,
        // "scale":1,
        // "disableAutoScale":false,
        // "allowUpscale":false,
        // "clickToLoad":false,
        // "showSuggestionButtons":true,
        // "buttonRounding":0.7,
        // "buttonShadows":false,
    };
   
    /*
   parameters = {
        "id": "ggbApplet",
        "width":1920,
        "height":825,
        "showMenuBar":false,
        "showAlgebraInput":true,
        "showToolBar":true,
        "customToolBar":"0 77 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
        "showToolBarHelp":true,
        "showResetIcon":false,
        "enableLabelDrags":false,
        "enableShiftDragZoom":true,
        "enableRightClick":false,
        "errorDialogsActive":false,
        "useBrowserForJS":false,
        "allowStyleBar":false,
        "preventFocus":false,
        "showZoomButtons":true,
        "capturingThreshold":3,
        "appletOnLoad":function(api){},
        "showFullscreenButton":true,
        "scale":1,
        "disableAutoScale":false,
        "allowUpscale":false,
        "clickToLoad":false,
        "appName":"graphing",
        "showSuggestionButtons":true,
        "buttonRounding":0.7,
        "buttonShadows":false,
        "language":"es",
   };
   */
}

var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var ggbApp = new GGBApplet(parameters, '5.0', views);

window.addEventListener("load", function () {
    // ggbApp.setHTML5Codebase("https://cdn.geogebdra.org/apps/5.0.498.0/web3d");
    // ggbApp.setHTML5Codebase('js/lib/GeoGebra/HTML5/5.0/web3d/', true);
    ggbApp.setHTML5Codebase('js/lib/GeoGebra/bundle-5-0-523-0/HTML5/5.0/web3d/', true);
    ggbApp.inject('ggb-element');
});