function validatePassword() {
    var passwordInput = document.getElementById('password');
    var warnElement = document.getElementById('warn'); 
    var password = passwordInput.value;

    if (password.length < 6) {
        // 密码少于六位，显示警告信息
        warnElement.textContent = '密码不能少于六位';
        warnElement.style.color = 'red'; 
        passwordInput.setCustomValidity('密码不能少于六位'); 
    } else {
        
        warnElement.textContent = '';
        passwordInput.setCustomValidity(''); 
    }
}

$(function(){
	var currentIndex=0;
	var $tab=$("#tab li");
	var $login=$("#login_content>div");
	var $tab2=$("#tab2");
	var $footer=$("#login_footer>ul");
	var login=false;
	var y=0;
	
	// alert($tab[0])
	$tab.click(function(){
		$login[currentIndex].style.display="none";
		$tab.removeClass("focus");
		$(this).addClass("focus");
		var index=$(this).index();
		$login[index].style.display="block";
		currentIndex=index;
		
	});
	$("#username").blur(function(){
		test();
	})
	$("#password").blur(function(){
		test();
	})
	
	$tab2.click(function(){
		alert("由于开发人员技术不达标，改功能尚未开发，");
	});
	
	$footer.click(function(){
		alert("由于开发人员技术不达标，改功能尚未开发，");
	});
	
	
	
	$("#submit").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		var $warn=$("#warn");
		if(username==123456&&password==123456){
			login=true;
			window.location.href="./index.html?login=true";
			alert("登录成功！");
			return true;
		}else if($("#username").val()==""){
			$warn.html("请输入手机号/邮箱/用户名!");
		}else if($("#password").val()==""){
			$warn.html("请输入密码!");
		}else if(username!=123456){
			alert("账户不存在！")
		}else if(username==123456&&password!=123456){
			alert("密码错误！")
		}else{
			$warn.html();
		}
		
		return false;
	});
	
	function test(){
		var username=$("#username").val();
		var password=$("#password").val();
		if(username!=""&&password!=""){
				$("#submit").css("background","#3F3037");
		}else{
			    $("#submit").css("background","#685459");
		}
	}
	
});