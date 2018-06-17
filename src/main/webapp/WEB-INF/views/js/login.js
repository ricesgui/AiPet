
/*function sendJSON(formName, urlName) {
    //获取表单数据，并序列化
    var formData = $("#" + formName).serializeArray();

    //将序列化数据转为对象
    var formObject = {};
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
        success:function (data) {//回调函数
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
$('#email').blur(function(){   
    var email=$(this).val();  
    if(email!=""){  
     $.ajax({  
        url:"/views/log_in",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType:"json",   //返回格式为json  
        async:true,//请求是否异步，默认为异步，这也是ajax重要特性  
        data:JSON.stringify({"email":email}), //使用这个函数可以转化为json格式   //参数值  
        type:"POST",   //请求方式  
       /*  beforeSend:function(){ 
            //请求前的处理 
        }, */  
        /*  因为服务器端返回的是json对象所以可以直接用对象名。属性名 */  
        /* JSON.stringify用于把json对象解析成string 
        JSON.parse()用于把json字符串解析成json对象 */  
      /*  success: function (data) {
                if(data.status=='fail'){
                    if (data.errorType=='1') alert("邮箱不存在！");
                    else if (data.errorType=='2') alert("邮箱或密码错误，请重新输入！");
                }
                else window.location.href="index.html";
            },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }
            
     });  
    }
});*/