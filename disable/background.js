
chrome.action.onClicked.addListener(tab => {   
    var newURL = "https://www.doomovie-hd.com/?r=live_tv";
     chrome.tabs.create({ url: newURL });
     console.log("open new tab")
 });