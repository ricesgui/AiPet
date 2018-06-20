
/*$(function () { $("[data-toggle='tooltip']").tooltip();
        
     });
    alert("欢迎登录Apet.com!");
*/
window.onload=function(){
    onload2();
    onload3();
    onload4();
}
  function onload2()
        {
            var xmlhttp;          
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
                    if(obj.user_name==null)
                    {
                         document.getElementById("txtHint").innerHTML="";
                         //document.getElementById("s1").innerHTML="为使您有更好的用户体验，建议Google浏览器全屏显示";                                     
                        // document.getElementById("third").innerHTML="APet.com";
                    }
                   
                    else  
                    {
                     document.getElementById("txtHint").innerHTML=obj.user_name;
                      //实现第二个提示
                    
                    document.getElementById("s1").innerHTML="您已登录";                                     
                    document.getElementById("third").innerHTML="退出";
        
                    //var node4 = document.getElementById("four");
                    //node4.href = "login.html";
                    $("#yincang").hide();
                    $("#div-m").hide();
                    var im = document.getElementById("denglu");
                    var bigImg = document.createElement("img");     //创建一个img元素  
                    bigImg.src="images/maomi.jpg";   //给img元素的src属性赋值  
                    bigImg.height="400";  //320个像素 不用加px  
                  
                    im.appendChild(bigImg);      //为dom添加子元素img  
                    }
                }
            }
            xmlhttp.open("POST","/resources/get_name",true);
            xmlhttp.send();
        }
        function onload3(){
           $("#third").click(function(){
            $.ajax({
                type: "POST",
                url: "/views/log_out",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({"eventType":"1"}),
                dataType: "json",
                success: function (data) {//回调函数
                 if(data.status=='success'){
                    window.location.href="index.html";
                }
                 else console.log("error");
                },
                error: function (xhr,error) {
                    console.debug(xhr);
                    console.debug(error);
                }
            });
        });
       };
   function onload4(){
    $("#log").click(function(){   
    var email=$(this).val();  
    var password=$(this).val();
    if(email!=""&&password!=""){  
     $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/log_in",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"email":email,"password":password}), //使用这个函数可以转化为json格式   //参数值  
        dataType: "json",   //返回格式为json  
        //async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
        success: function (data) {//回调函数

            if(data.status=='success'){
                    window.location.href="index.html";
                }
                 else console.log("error");
                },
                error: function (xhr,error) {
                    console.debug(xhr);
                    console.debug(error);
                }
               /* if(data.status=='ok'){

                alert("test");
                if(data.status=='ok'){

                    window.location.href="index.html";
                }
                else if(data.status=='fail')
                    {
                        if (data.errorType=='1') alert("邮箱不存在！");
                        else if (data.errorType=='2') alert("邮箱或密码错误，请重新输入！");
                }
                */
            
            
     });  
    }

});
}
       
        
    
        

    