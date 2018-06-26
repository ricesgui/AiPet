$(function(){
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
                if(data.validity=='true')
                 {   
                    console.log("邮箱可以注册");              
              }             
                else { 
                    console.log("邮箱已存在！");
                    alert("邮箱已存在！")
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
    var name =$("#name").val();
    var email=$("#email").val();  
    var password=$("#password").val();
    var realname =$("#realname").val();
    var sex=$("#userSex").val();  
    var number=$("#telNumber").val();
    var address =$("#address").val();
   
    if(name!=""&&email!=""&&password!=""&&number!=""){  
     $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/registerEvent",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"name":name,"email":email,"password":password,"realname":realname,"sex":sex,"number":number,"address":address}), 
        dataType: "json",   //返回格式为json   
         success: function (data) {//回调函数
                if(data.status=='success'){
                  
                    alert("注册成功，请登录!");
                    window.location.href="index.html";
                }
                else if(data.status=='fail')
                    {
                       
                       alert("请确认您的邮箱是否已注册！");
                }
                
            },
        error: function (xhr,error) {
                console.log("login.fail");
            }  
     }); 
       }
     else {alert("请完整填写个人信息！"); }
      
 });
});