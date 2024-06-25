

function checkPasswordLength() {
    var passwordInput = document.getElementById('psd1');
    var passwordWarn = document.getElementById('psd1_warn');

    if (passwordInput.value.length < 6) {
        passwordWarn.textContent = '密码长度不能小于6位';
        passwordWarn.style.display = 'block'; 
    } else {
        passwordWarn.textContent = ''; 
        passwordWarn.style.display = 'none'; 
    }
}


$(function(){
	var str="";
	
	$("#username").blur(function(){
		checkUserName();
		test()
		str="";
	});
	$("#psd1").blur(function(){
		checkPsd1();
		test()
		str="";
	});
	$("#psd2").blur(function(){
		checkPsd2();
		test()
		str="";
	});
	$("#phone").blur(function(){
		checkPhone();
		test()
		str="";
	});
	$("#email").blur(function(){
		checkEmail();
		test();
		str="";
	});
	
	$("#submit").click(function(){
		checkUserName();
		checkPsd1();
		checkPsd2();
		checkPhone();
		checkEmail();
		
		if(str!=""){
			str="请按要求填写信息！";
			alert(str);
			str="";
			return false;
		}
		window.location.href="./login.html?";
		alert("注册成功！");
		
	});
	// 检验用户名
	function checkUserName(){
		var username = $("#username").val();
		var user_reg = /\w{6,18}/;
		var test=false;
		
		if(username==""){
			str+="用户名不能为空！\n";
			$("#user_warn").html("用户名不能为空！");
		}else if(!user_reg.test(username)){
			str+="用户名必须由6－18个字母数字下划线组成！\n";
			$("#user_warn").html("用户名必须由6－18个字母数字下划线组成！");
		}else{
			$("#user_warn").html("");
			test=true;
		}
		checkIcon(test,$("#user_test"));
		
	}
	// 检验密码
	function checkPsd1(){
		var psd1 = $("#psd1").val();
		var psd1_reg = /\w{6,18}/;
		var test=false;
		
		if(psd1==""){
			str+="密码不能为空！\n";
			$("#psd1_warn").html("密码不能为空！");
		}else if(!psd1_reg.test(psd1)){
			str+="密码必须由6－18个字母数字下划线组成！\n";
			$("#psd1_warn").html("密码必须由6－18个字母数字下划线组成！");
		}else{
			$("#psd1_warn").html("");
			test=true;
		}
		checkIcon(test,$("#psd1_test"));
	}
	
	// 检验重复密码
	function checkPsd2(){
		var psd1 = $("#psd1").val();
		var psd2 = $("#psd2").val();
		var psd2_reg = /\w{6,18}/;
		var test=false;
		
		if(psd2==""){
			str+="确认密码不能为空！\n";
			$("#psd2_warn").html("确认密码不能为空！");
		}else if(!psd2_reg.test(psd2)){
			str+="密码必须由6－18个字母数字下划线组成！\n";
			$("#psd2_warn").html("密码必须由6－18个字母数字下划线组成！");
		}else if(psd1!=psd2){
			str+="两次输入密码不一致！\n";
			$("#psd2_warn").html("两次输入密码不一致！");
		}else{
			$("#psd2_warn").html("");
			test=true;
		}
		checkIcon(test,$("#psd2_test"));
	}
	
	// 检查电话号码
	function checkPhone(){
		var phone = $("#phone").val();
		var phone_reg = /^1[34578]\d{9}$/;
		var test=false;
		
		if(phone==""){
			str+="电话不能为空！\n";
			$("#phone_warn").html("电话不能为空！");
		}else if(!phone_reg.test(phone)){
			str+="电话填写有误！\n";
			$("#phone_warn").html("电话填写有误！");
		}else{
			$("#phone_warn").html("");
			test=true;
		}
		checkIcon(test,$("#phone_test"));
	}
	
	// 检验邮箱
	function checkEmail(){
		var email = $("#email").val();
		var email_reg = /^[\w\.-]+@[a-z0-9]+\.[a-z]+$/i;
		var test=false;
		
		if(email==""){
			$("#email_warn").html("");
		}
		else if(!email_reg.test(email)){
			str+="邮箱填写有误！\n";
			$("#email_warn").html("邮箱填写有误！");
		}else{
			$("#email_warn").html("");
			test=true;
		}
		checkIcon(test,$("#email_test"))
	}
	
	function test(){
		var username=$("#username").val();
		var phone=$("#phone").val();
		var email=$("#email").val();
		var psd1=$("#psd1").val();
		var psd2=$("#psd2").val();
		if(username!=""&&phone!=""&&email!=""&&psd1!=""&&psd2!=""){
			$("#submit").css("background","#3F3037");
		}else{
			$("#submit").css("background","#685459");
		}
	}
	
	function checkIcon(test,obj){
		if(test==true){
			obj.removeClass("fa-exclamation-circle");
			obj.addClass("fa-check-square");
		}else{
			obj.removeClass("fa-check-square");
			obj.addClass("fa-exclamation-circle");
		}
	}
});