/* function checkUserByAjax(){  
                var email = $("#email").val();//获取表单元素值  
                var password = $("#password").val();//获取表单元素值  
                if(email==""){  
                    $("#check_email").html("邮箱不能为空");  
                    return;  
                }  else if(password==""){
                    $("#check_pass").html("密码不能为空");  
                    return; 
                }
                //第一步 实例化 XMLHttpRequest对象
                var xmlhttp;  
                if(window.XMLHttpRequest){  
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码  
                    xmlhttp = new XMLHttpRequest();  
                }else{  
                // IE6, IE5 浏览器执行代码  
                    xmlhttp =  new ActiveXObject("Microsoft.XMLHTTP");  
                }  
                //第二步 调用open方法设置参数，调用send发送请求 true表示异步  false表示同步
                xmlhttp.open("POST","/views/log_in",true);  
                xmlhttp.send();  
                //第三步 监听服务端响应  
                xmlhttp.onreadystatechange=function(){  
                    if(xmlhttp.readyState==4 & xmlhttp.readyStatus==200){  
                        function(data){
                          if(data.status=='fail'){
                            if (data.errorType=='1') alert("邮箱不存在！");
                           else if (data.errorType=='2') alert("邮箱或密码错误，请重新输入！");
                        }
                        else window.location.href="index.html";
                      }
                    }  
                }  
            }     */
function sendJSON(formName, urlName) {
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
        success: function (data) {
            if(data.status=='fail'){
                if (data.errorType=='1') alert("邮箱不存在！");
                else if (data.errorType=='2') alert("邮箱或密码错误，请重新输入！");
            }
            else window.location.href="index.html";
        }
        
    });
}
