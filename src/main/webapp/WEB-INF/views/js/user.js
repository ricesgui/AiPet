$(function(){
	//点击个人中心，进到页面，向服务器请求数据回填
   		$.ajax({  
        type: "POST",   //请求方式  
        url: "/views/",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json   
        success: function (users) {//回调函数
        //向服务器请求用户个人信息，并显示
            var users =JSON.parse(users);
            $("#name").val(users.name);
            $("#realname").val(users.realname);
            $("#sex").val(users.sex);
            $("#password").val(users.password);
            $("#number").val(users.number);
            $("#email").val(users.email);
            $("#address").val(users.address);
        },
        error: function(){
        	console.log("获取.fail");
        }
    });
//点击修改按钮触发函数，上传服务器修改
$("#btn-save").click(function(){
    var name =$("#name").val();
    var email=$("#email").val();  
    var password=$("#password").val();
    var realname =$("#realname").val();
    var sex=$("#sex").val();  
    var number=$("#number").val();
    var address =$("#address").val();
   
    if(name!=""&&email!=""&&password!=""&&number!=""){  
     $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"name":name,"email":email,"password":password,"realname":realname,"sex":sex,"number":number,"address":address}), 
        dataType: "json",   //返回格式为json   
         success: function (data) {//回调函数
                if(data.status=='success'){                  
                    alert("修改成功");
                    //服务器返回用户数据json包，获取并修改原来的值                   
                    var users =JSON.parse(xmlhttp.responseText);
                    $(this).val(""); //清空上次input框里的数据
		            $("#name").val(users.name);
		            $("#realname").val(users.realname);
		            $("#sex").val(users.sex);
		            $("#password").val(users.password);
		            $("#number").val(users.number);
		            $("#email").val(users.email);
		            $("#address").val(users.address);
                }
                else if(data.status=='fail')
                    {
                       
                       alert("请确认您的修改后的邮箱是否已被注册！");
                }
                
            },
        error: function (xhr,error) {
                console.log("users.fail");
            }  
     }); 
       }
     else {alert("请完整填写个人信息！"); }
      
 });

 });
