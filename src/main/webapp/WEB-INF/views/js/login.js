/*function login_login(){ 
		var email=$('.email').val();
		var password=$('.password').val();
		$.post("/resources/get_name",{email:email,password:password},function(data){
			if(data.status==100){
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
	// 在点击登录时记录用户名信息
function  remeberUser()
{
    var storage = window.localStorage;
    storage["loginpassword"] = $("#password").val();
    storage["bj"] =  "yes"; 
}

// 页面加载时判断缓存中isstorename是否为yes，是则取出用户名
window.onload = function()
{
	//判断是否存在过用户
	var storage = window.localStorage;
	if("yes" == storage["bj"])
	{              
	 	$("#password").val(storage["loginpassword"]);
	}
}*/
 /*function checkuser(str)
        {
            var xmlhttp;
            if (str=="")
            {
                return;
            }
            if (window.XMLHttpRequest)
            {
                // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp=new XMLHttpRequest();
            }
            else
            {
                // IE6, IE5 浏览器执行代码
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    var obj =JSON.parse(xmlhttp.responseText);
                    document.getElementById("txtHint").innerHTML=obj.tname;
                }
            }
            xmlhttp.open("GET","/resources/get_name",true);
            xmlhttp.send();
        }
        window.onload=checkuser;//不要括号*/