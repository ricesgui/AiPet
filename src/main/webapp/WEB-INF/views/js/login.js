
$(document).ready(function(){
     $("#log").click(function(){  
    var email=$("#email").val();  
    var password=$("#password").val();
    if(email==""&&password==""){  alert("请输入您的用户名和密码！"); }
     else {
        $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/log_in",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"email":email,"password":password}), //使用这个函数可以转化为json格式   //参数值  
        dataType: "json",   //返回格式为json  
        //async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
         success: function (data) {//回调函数
                if(data.status=='ok'){
                    window.location.href="index.html";
                }
                else if(data.status=='fail')
                    {
                        if (data.errorType=='1') alert("邮箱不存在！");
                        else if (data.errorType=='2') alert("邮箱或密码错误，请重新输入！");
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
