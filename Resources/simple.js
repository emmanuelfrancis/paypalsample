var Paypal = require('ti.paypal');

var win = Ti.UI.currentWindow;
var u = Ti.Android != undefined ? 'dp' : 0;

var status = Ti.UI.createLabel({
    top: 50 + u, height: 45 + u, color: '#333',
    text: 'Loading, please wait...'
});
var btn = Ti.UI.createButton({
	title:"test",
	width:'100',
	height:'100'
});
win.add(btn);
var str = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC%2d2WX62315P38621710";
btn.addEventListener("click", function(e){
	
	Ti.Platform.openURL(str);
});
var webv = Ti.UI.createWebView({
	width:'100%',
	height:'80%',
	url:str
});

win.add(webv);
