
    /*$(function () { $("[data-toggle='tooltip']").tooltip();
        
     });
    alert("欢迎登录Apet.com!");
*/
window.onload=function(){
    onload2();
    onload3();
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
                    document.getElementById("txtHint").innerHTML="";
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
            console.log('1');
            $.ajax({
                type: "POST",
                url: "/views/log_out",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({"evenType":"1"}),
                dataType: "json",
                success: function () {//回调函数
                 console.log(2);
                 window.location.href="index.html"
                },
                error: function (xhr,error) {
                    console.debug(xhr);
                    console.debug(error);
                }
            });
        });
        }
    
        

    