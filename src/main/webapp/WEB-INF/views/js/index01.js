window.onload=function(){
    $("#user_info").hide();
    onload2();
    onload3();
   }
function onload2(){
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
                    $("#txtHint").html("您还没有登录哦，去<a href=\"login.html\">登录</a>获得更好体验");              
                }                  
                else  
                {
                document.getElementById("txtHint").innerHTML=obj.user_name;
                  //实现第二个提示                   
                document.getElementById("s1").innerHTML="您已登录";                                     
                document.getElementById("third").innerHTML="退出"; 
                $("#user_info").show();       
                $("#yincang").hide();                
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
                    console.log("index.fail");
                }
            });
        });
       }
       