//mailBoxs里存储用来匹配的串

var mailBox="@qq.com @163.com @129.com @foxmail.com @gmail.com @yahoo.com.cn"
var matchmail=document.getElementById("match_email");
var email=document.getElementById("email");
//匹配邮箱后缀
function match_mail(keyword){
	matchmail.innerHTML='';
	matchmail.style.display="none";
	if(!keyword)
		return;
	if(!keyword.match(/^[\w\.\-]+@\w*[\.]?\w*/))
		return;
	keyword=keyword.match(/@\w*[\.]?\w*/);
	var matchs=mailBox.match(new RegExp(keyword+"[^]* ","gm"));
	if(match){
		matchs=matchs.join("").replace(/$/,"").split("");
		matchmail.style.display="block";
		for(var i=0;i<match.length;i++){
			matchmail.innerHTML+='<div>'+matchs[i]+'</div>';
		}
	}
}

//点击除了匹配框之外的任何地方，匹配框消失
document.onclick=function(e){
	var target=e.target;
	if(target.id!="matchmail"){
		matchmail.style.display="none";
	}
}
//将匹配框上鼠标所点的字符放入输入框
matchmail.onclick=function(e){
	var target=e.target;
	email.value=email.value.replace(/@.*/,target.innerHTML);
}



