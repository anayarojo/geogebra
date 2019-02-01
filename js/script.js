const strUrl = window.location.href;
const objUrl = new URL(strUrl);
const type = objUrl.searchParams.get('type');
const example = objUrl.searchParams.get('example');

var types = ['classic', 'graphing', 'geometry', '3d'];

if(type == undefined || !types.includes(type)){
    window.location.replace('/?type=graphing');
}

var callback = function(api){
    //api.registerAddListener('addOnGeogrebra');
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
        "appletOnLoad": callback
    };
}

if(example != undefined){
    $.ajax({
        url: 'js/examples.json',
        dataType: 'json',
        success: function(data){
            var obj = data.find(function(item){
                return item.example == example;
            });

            if(obj) parameters.ggbBase64 = obj.base64;
            initGeoGebra(parameters);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.error(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            initGeoGebra(parameters);
        }
    });
}
else
{
    initGeoGebra(parameters);
}

function initGeoGebra(parameters){

    var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
    var ggbApp = new GGBApplet(parameters, '5.0', views);

    if(document.readyState === "complete"){
        injectApplet(ggbApp);
    } else {
        window.addEventListener("load", function () {
            injectApplet(ggbApp);
        });
    };
}

function injectApplet(ggbApp) {
    ggbApp.setHTML5Codebase('js/lib/GeoGebra/bundle-5-0-523-0/HTML5/5.0/web3d/', true);
    ggbApp.inject('ggb-element');
}



