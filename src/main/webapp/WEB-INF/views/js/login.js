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
                if(data.validity=='fail')
                {$("#e2").html("邮箱不存在");                
                $("#e2"）.css({"color":"red","font-size":"20px"});
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
 }