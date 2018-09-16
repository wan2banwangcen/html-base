function foo(id){
	return document.getElementById(id);
}
var lists;
var len;
window.onload=function(){
	var objtxt=foo("emails");
	var objlist=foo("eem");
	lists=objlist.getElementsByTagName("option");
	len=lists.length;
	//当松开键盘按键的时候
	objtxt.onkeyup=function(){
		//获取文本框中的值
		var txt=this.value;
		var flag="";
		if(txt.indexOf("@")>0){//ndexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
			flag=txt.substring(txt.indexOf("@")-1);//获取的输入的@开始的内容
			txt=txt.substring(0,txt.indexOf("@"));//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
		}
		else{
			flag="";
		}
		var val="";
		for(var i=0;i<len;i++){
			val=lists[i].textContent;//textContent 属性设置或返回指定节点的文本内容，以及它的所有后代。
			val=val.substring(val.indexOf("@"));
			lists[i].textContent=txt+val;
		}
	}
}
