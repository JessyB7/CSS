/* 1. window.eventֻ����IE��ʹ�ã�����������Firefox�£�������ΪFirefox��eventֻ�����¼��������ֳ�ʹ�á�  Firefox�����Դ������event���������ݡ� */
/* ��<button onclick="onClick()" >��������������</button>����Ϊ��*/
<button onclick="onClick(event)">���OuterHTML</button>
<script type="text/javascript">
functiononclick(event){
event= event || window.event;
alert(event.clientX);
}
</script>

/* 2. HTML��ȡ�������� 
	FireFox��ȡ��ʽdocument.getElementById("idName")
	ieʹ��document.idname����document.getElementById("idName")
	����취��ͳһʹ��document.getElementById("idName");
*/
document.getElementById("idName");
/* 3. const����
	��Firefox�£�����ʹ��const�ؼ��ֻ�var�ؼ��������峣����
	IE�£�ֻ��ʹ��var�ؼ��������峣����
	���������ͳһʹ��var�ؼ��������峣����
*/
var x=7;

/* 4. frame����

	�磺<frame src="xxx.html" id="frameId"name="frameName" /> 
	a)      ����frame����
	IE��ʹ��window.frameId����window.frameName�����ʣ�Firefox��ֻ��ʹ��window.frameName���ʣ�
	����취��ͳһʹ��window.frameName��window.document.getElementById("frameId")���������frame����	 

	b)      �л�frame����
	�� IE��Firefox�ж�����ʹ��window.document.getElementById("testFrame").src= "xxx.html"��window.frameName.location = "xxx.html"���л�frame�����ݣ�
	�����Ҫ��frame�еĲ������ظ����ڣ�ע�ⲻ��opener������parent����������frame��ʹ��parent�����ʸ����ڡ����磺
	parent.document.form1.filename.value="Aqing";


*/
window.frameName("frameName");
window.document.getElementById("frameId");
window.document.getElementById("testFrame").src= "xxx.html";
window.frameName.location = "xxx.html";

/* 7. firefox��IE�ĸ�Ԫ��(parentElement)������
	IE��obj.parentElement
	firefox��obj.parentNode
	�����������Ϊfirefox��IE��֧��DOM�����ȫ��ʹ��obj.parentNode
*/
obj.parentNode;

/*  8. innerText������
	innerText��IE������������������innerText��FireFox��ȴ���У�����textContent��
	���������
*/
if (navigator.appName.indexOf("Explorer") > -1) {//��navigator.appName.indexOf("Microsoft")!= -1,����IE�����
    document.getElementById('element').innerText = "my text";
} else {
    document.getElementById('element').textContent = "my text";
} 

/* 9. AJAX��ȡXMLHTTP������ */
var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} elseif (window.ActiveXObject) { // IE�Ļ�ȡ��ʽ
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
/* 10. ��IE�У�xmlhttp.send(content)������content����Ϊ�գ���firefox����Ϊnull��Ӧ����send("")����������411���� */
xmlhttp.send(content);
xmlhttp.send("");//firefox����




