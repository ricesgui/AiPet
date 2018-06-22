$(function() { 
$("#email").blur(function(){   
    var email=$("#email").val();  
    if(email!=""){  
     $.ajax({  
        url: "/check/username",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
        data: JSON.stringify({"email":email}), //使用这个函数可以转化为json格式   //参数值  
        type: "POST",   //请求方式  
         /*  因为服务器端返回的是json对象所以可以直接用对象名。属性名 */  
       success: function (data) {
                if(data.validity=='false')
                {$("#e2").html("邮箱不存在");                
                $("#e2").css({"color":"red","font-size":"20px"});
              }
             
                else{ 
                    $("#e2").html("邮箱存在");
                    $("#e2").css({"color":"green","font-size":"20px"});
            }
            },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }      
     });  
    }
});

    $("#reg").click(function(){  
    var username =$("#userName").val();
    var email=$("#email").val();  
    var password=$("#password").val();
    if(userName!=""&&email!=""&&password!=""){  
     $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/log_in",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"username":userName"email":email,"password":password}), 
        dataType: "json",   //返回格式为json  
        //async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
         success: function (data) {//回调函数
                if(data.status=='success'){
                    window.location.href="index.html";
                }
                else if(data.status=='fail')
                    {
                       alert("请确认您是否填写完成");
                }
                
            },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }  
     }); 
       }
     else {alert("请完整填写个人信息！"); }
      
 }
}