$(function(){
	//进到页面，向服务器请求新领养数据，异步刷新页面
   		$.ajax({  
        type: "POST",   //请求方式  
        url: "/views/",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json   
        success: function (info) {//回调函数
        //向服务器请求新的领养数据，并显示
        console.log("获取成功！");
            var info =JSON.parse(info);         
        },
        error: function(){
        	console.log("获取领养信息.fail");
            var child=document.createElement("h4");
            
            $("#para").append();
          
        }
});
    });