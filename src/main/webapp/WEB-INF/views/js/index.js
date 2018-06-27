
window.onload=function(){
    $("#user_info").hide();
    onload2();
    onload3();
    onload4();
    onload5();
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
                }                  
                else  
                {
                document.getElementById("txtHint").innerHTML=obj.user_name;
                  //实现第二个提示                   
                document.getElementById("s1").innerHTML="您已登录";                                     
                document.getElementById("third").innerHTML="退出"; 
                $("#user_info").show();       
                $("#yincang").hide();
                $("#div-m").hide();
                var im = document.getElementById("denglu");
                var bigImg = document.createElement("img");     //创建一个img元素  
                bigImg.src="images/maomi.jpg";   //给img元素的src属性赋值  
                bigImg.height="400";  //320个像素 不用加px                   
                im.appendChild(bigImg);     //为dom添加子元素img  
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
       
   function onload4(){
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
   var start=0,size=1;
function onload5(){
    refresh(0,1);
    setInterval("refresh(start,size)",100000); 
function refresh(start,size){
//定时刷新页面数据
console.log(1);
        $.ajax({
        type: "POST",   //请求方式  
        url: "/views/get_placeout",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        data:stringfy({"start":0,"size":1}), 
        success: function (data){//回调函数
        //向服务器请求用户个人信息，并显示   
        console.log(data);  
        for (var i = data.length - 1; i >= 0; i--) {
            var html="<div class=\"col-xs-6 col-xs-3\" id=\"para\"><div class=\"thumbnail\" id=\"detail\"><div class=\"caption\"><h4>地址："+data.user.placeout[i].address+"</h4><p>年龄："+data.users.placeout[i].pet.age_year+"年"+data.users.placeout[i].pet.age_month+"月"+"<br>"+"发布时间："+data.user.placeout[i].datetime+"<br>"+"发布人描述信息："+data.user.placeout[i].pet.petdescri+"</p></div></div></div>";
        $("#para").append(html);
         } 
        
        },
        error: function(){
            console.log("获取.fail");
        }
    });  
        start=start+size;
    }
    
}
   

       
        
    
        

    