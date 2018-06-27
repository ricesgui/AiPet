var start=0,size=2;

function refresh(var start,var size){
//定时刷新页面数据
   		$.ajax({ 
        type: "POST",   //请求方式  
        url: "/views/get_user_info",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        data:stringfy({"start":start,"size":size}), 
        success: function (users){//回调函数
        //向服务器请求用户个人信息，并显示   
        console.log(users);
        var html01="<div class=\"col-xs-6 col-xs-3\" id=\"para\"><div class=\"thumbnail\" id=\"detail\"><div class=\"caption\"><h4>地址："+users[0].address+"</h4><p>年龄："+users[0].age_year+"年"+users[0].age_month+"月"+"<br>"+"发布时间："+users[0].datetime+"<br>"+"发布人描述信息："+users[0].petdescri+"</p></div></div></div>";
        $("#para").append(html01);
        console.log(html01);
        var html02="<div class=\"col-xs-6 col-xs-3\" id=\"para\"><div class=\"thumbnail\" id=\"detail\"><div class=\"caption\"><h4>地址："+users[1].address+"</h4><p>年龄："+users[1].age_year+"年"+users[1].age_month+"月"+"<br>"+"发布时间："+users[1].datetime+"<br>"+"发布人描述信息："+users[1].petdescri+"</p></div></div></div>";
        $("#para").append(html02);
        },
        error: function(){
        	console.log("获取.fail");
        }
    });  
        start=start+size;
    }
 setInterval("refresh(start,size)",1000);    