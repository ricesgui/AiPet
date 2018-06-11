
	/*$(function () { $("[data-toggle='tooltip']").tooltip();
		
	 });
	alert("欢迎登录Apet.com!");


	function login_login(){ 
		var email=$('.email').val();
		var password=$('.password').val();
		$.post("/resources/get_name",{username:username,password:password},function(date){
			if(date.status==100){
				window.location.reload();//刷新当前页面.
                // window.location.href='/Home/Home';
                // $('.class2').show();
                // $('.class1').hide();
                // $('.SContent-box').hide();
                // $('#bg').hide();
                // var user=date.user;
                // $('.username').html(user);
                
			}else{
				alert('您的账号或者密码错误');
			}          
		})
	}
*/

	//实现用户名获取后替代
	var node = document.createElement("span");
	
	var txt="用户名";
	var text = document.createTextNode(txt);
	node.appendChild(text); 
	var parent = document.getElementById("first");
	parent.appendChild(node);
	//结束用户名替代
	//实现第二个提示
	var node1 = document.createElement("span");
	var text1 = document.createTextNode("您已登录");
	node1.appendChild(text1); 
	var parent1 = document.getElementById("second");
	var node2 = document.getElementById("s1");
	parent1.replaceChild(node1,node2);

	//结束第二个提示
	
	

