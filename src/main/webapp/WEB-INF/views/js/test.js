$(function(){
	//点击个人中心，进到页面，向服务器请求数据回填
   		$.ajax({ 
        type: "POST",   //请求方式  
        url: "/views/get_user_info",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json   
        success: function (users){//回调函数
        //向服务器请求用户个人信息，并显示      
        var html="<div class=\"col-xs-6 col-xs-3\" id=\"para\"><div class=\"thumbnail\" id=\"detail\"><div class=\"caption\"><h4>地址："+users.address+"</h4><p>年龄："+users.age_year+"年"+users.age_month+"月"+"<br>"+"发布时间："+users.datetime+"<br>"+"发布人描述信息："+users.petdescri+"</p></div>";
        $("#info").append(html);
        },
        error: function(){
        	console.log("获取.fail");
        }
    });  
    });
     