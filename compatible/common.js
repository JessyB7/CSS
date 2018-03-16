/* 1. window.event只能在IE下使用，而不能用在Firefox下，这是因为Firefox的event只能在事件发生的现场使用。  Firefox必须从源处加入event作参数传递。 */
/* 如<button onclick="onClick()" >获得鼠标点击横坐标</button>，改为：*/
<button onclick="onClick(event)">获得OuterHTML</button>
<script type="text/javascript">
functiononclick(event){
event= event || window.event;
alert(event.clientX);
}
</script>

/* 2. HTML获取对象问题 
	FireFox获取方式document.getElementById("idName")
	ie使用document.idname或者document.getElementById("idName")
	解决办法：统一使用document.getElementById("idName");
*/
document.getElementById("idName");
/* 3. const问题
	在Firefox下，可以使用const关键字或var关键字来定义常量；
	IE下，只能使用var关键字来定义常量；
	解决方法：统一使用var关键字来定义常量。
*/
var x=7;

/* 4. frame问题

	如：<frame src="xxx.html" id="frameId"name="frameName" /> 
	a)      访问frame对象
	IE：使用window.frameId或者window.frameName来访问；Firefox：只能使用window.frameName访问；
	解决办法：统一使用window.frameName或window.document.getElementById("frameId")来访问这个frame对象；	 

	b)      切换frame内容
	在 IE和Firefox中都可以使用window.document.getElementById("testFrame").src= "xxx.html"或window.frameName.location = "xxx.html"来切换frame的内容；
	如果需要将frame中的参数传回父窗口（注意不是opener，而是parent），可以在frame中使用parent来访问父窗口。例如：
	parent.document.form1.filename.value="Aqing";


*/
window.frameName("frameName");
window.document.getElementById("frameId");
window.document.getElementById("testFrame").src= "xxx.html";
window.frameName.location = "xxx.html";

/* 7. firefox与IE的父元素(parentElement)的区别
	IE：obj.parentElement
	firefox：obj.parentNode
	解决方法：因为firefox与IE都支持DOM，因此全部使用obj.parentNode
*/
obj.parentNode;

/*  8. innerText的问题
	innerText在IE中能正常工作，但是innerText在FireFox中却不行，需用textContent；
	解决方法：
*/
if (navigator.appName.indexOf("Explorer") > -1) {//若navigator.appName.indexOf("Microsoft")!= -1,则是IE浏览器
    document.getElementById('element').innerText = "my text";
} else {
    document.getElementById('element').textContent = "my text";
} 

/* 9. AJAX获取XMLHTTP的区别 */
var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} elseif (window.ActiveXObject) { // IE的获取方式
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
/* 10. 在IE中，xmlhttp.send(content)方法的content可以为空，而firefox则不能为null，应该用send("")，否则会出现411错误。 */
xmlhttp.send(content);
xmlhttp.send("");//firefox兼容




