

/*$("#log").click(function() {
    var em1=$(this).val();
    var pa1=$(this).val();
    if(em1!=""&&pa1!=""){
    //获取表单数据，并序列化
    //var formData = $("#" + formName).serializeArray();
    var formData = $("#form1").serializeArray();//自动将form表单封装成json
    //将序列化数据转为对象
    //var formObject = {};
    for (var item in formData) {
        formObject[formData[item].name] = formData[item].value;
    }
    var formJSON = JSON.stringify(formObject);

    //发送JSON到服务器
    $.ajax({
        type: "POST",
        url: "/views/log_in",
        contentType: "application/json; charset=utf-8",  //一定要设置这一行，很关键
        data: formJSON,
        datatype: "json",
        success: function (data) {//回调函数
                 if(data.status=='ok'){
                    window.location.href="index.html";
                }
                else console.log("error");
                },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
                }
    });
}
});
*/
$(document).ready(function(){
$("#log").click(function(){   
    var email=$(this).val();  
    var password=$(this).val();
    if(email!=""&&password!=""){  
     $.ajax({  
        url: "/log_in",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
      //  async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
        data: JSON.stringify({"email":email,"password":password}), //使用这个函数可以转化为json格式   //参数值  
        type: "POST",   //请求方式  
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
});
/*
$("#email").blur(function(){   
    var email=$(this).val();  
    if(email!=""){  
     $.ajax({  
        url: "/check/username",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
        data: JSON.stringify({"email":email}), //使用这个函数可以转化为json格式   //参数值  
        type: "POST",   //请求方式  
         /*  因为服务器端返回的是json对象所以可以直接用对象名。属性名 */  
        /* JSON.stringify用于把json对象解析成string 
        JSON.parse()用于把json字符串解析成json对象 */  
       /*success: function (data) {
                if(data.status=='fail'){
                 $("#e1").html("用户名不存在");
                }
                &（"#e1"）.css("color","red");
             ｝
                else{ 
                    $("#e1").html("用户名存在");
                    $("#e1").css("color","red");
            }
            },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }
            
     });  
    }
});
*/
