const strUrl = window.location.href;
const objUrl = new URL(strUrl);
const type = objUrl.searchParams.get('type');

var types = ['classic', 'graphing', 'geometry', '3d'];

if(type == undefined || !types.includes(type)){
    window.location.replace('/?type=graphing');
}

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
        "showMenuBar": true
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
        // "scale":1,
        // "disableAutoScale":false,
        // "allowUpscale":false,
        // "clickToLoad":false,
        // "showSuggestionButtons":true,
        // "buttonRounding":0.7,
        // "buttonShadows":false,
    };
}

var ggbApp = new GGBApplet(parameters, true);

window.addEventListener("load", function () {
    // ggbApp.setHTML5Codebase("https://cdn.geogebdra.org/apps/5.0.498.0/web3d");
    ggbApp.setHTML5Codebase('js/lib/GeoGebra/HTML5/5.0/web3d/', true);
    ggbApp.inject('ggb-element');
});