// (function(){
//     var script = document.createElement("SCRIPT");
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
//     script.type = 'text/javascript';
//     document.getElementsByTagName("head")[0].appendChild(script);
    
// })();

(function () {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var string = document.URL;
    console.log(string);


    

    
//การเพิ่ม Element
// var elem = document.createElement('div');
// elem.className = "test";
// elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
// document.body.appendChild(elem);


//เรียก ifram
// var iFrame  = document.createElement ("iframe");
// iFrame.src  = chrome.extension.getURL ("Embedded_Hello_world.htm");
// document.body.insertBefore (iFrame, document.body.lastChild);
})();