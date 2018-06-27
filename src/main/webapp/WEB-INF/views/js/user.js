$(function(){
	//点击个人中心，进到页面，向服务器请求数据回填
   		$.ajax({  
        type: "POST",   //请求方式  
        url: "/resources/get_user_info",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        //data:stringify({"start":0,"size":1}), 
        success: function (data) {//回调函数
        //向服务器请求用户个人信息，并显示
            $("#name").val(data.name);
            $("#realname").val(data.realname);
            $("#sex").val(data.sex);
            $("#password").val(data.password);
            $("#number").val(data.number);
            $("#email").val(data.email);
            $("#address").val(data.address);
            var html="<div class=\"caption\"><h4>地址："+data.address+"</h4><p>年龄："+data.age_year+"年"+data.age_month+"月"+"<br>"+"发布时间："+data.datetime+"<br>"+"发布人描述信息："+data.petdescri+"</p></div>";
            $("#useradopt-info").append(html);
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
		            $("#name").val(data.name);
		            $("#realname").val(data.realname);
		            $("#sex").val(data.sex);
		            $("#password").val(data.password);
		            $("#number").val(data.number);
		            $("#email").val(data.email);
		            $("#address").val(data.address);
                }
                else if(user.status=='fail')
                    {                       
                       alert("请确认您的修改后的邮箱是否已被注册！");
                }
                
            },
        error: function (xhr,error) {
                console.log("data.fail");
            }  
     }); 
       }
     else {alert("请完整填写个人信息！"); }
      
 });
    
 });

