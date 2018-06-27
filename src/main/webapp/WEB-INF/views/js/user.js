window.onload=function(){
    $("#user_info").hide();
    onload2();
    onload3();
    onload4();
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
                     alert("您还没有登录，请先登录");
                     window.location.href="login.html";                  
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
       function onload4(){
	//点击个人中心，进到页面，向服务器请求数据回填
   		$.ajax({  
        type: "POST",   //请求方式  
        url: "/resources/get_user_info",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        success: function (data) {//回调函数
        //向服务器请求用户个人信息，并显示       
        console.log(data);
        console.log(data.user.name);
            $("#name").val(data.user.name);
            $("#realname").val(data.user.realname);
            $("#sex").val(data.user.sex);
            $("#password").val(data.user.password);
            $("#number").val(data.user.number);
            $("#email").val(data.user.email);
            $("#address").val(data.user.address);
            for (var i = data.user.adopts.length - 1; i >= 0; i--) {
                var html="<div class=\"caption\"><h4>种类："+data.user.adopts[i].adoptSpecies+"</h4><p>性别："+data.user.adopts[i].petsex+"<br>联系方式："+data.user.adopts[i].telNumber+"<br>标题："+data.user.adopts[i].placeInTitle+"<br>发布时间："+data.user.adopts[i].datetime+"<br>"+"发布人描述信息："+data.user.adopts[i].pet.adopts[i].adoptDes+"</p></div>";
            $("#pet").append(html);
            }
            for (var i = data.user.placeouts.length - 1; i >= 0; i--) {
              var html="<div class=\"caption\"><h4>昵称："+data.user.placeouts[i].pet.name+"</h4><p>年龄："+data.user.placeouts[i].pet.age_year+"年"+data.user.placeouts[i].pet.age_month+"月"+"<br>"+"发布时间："+data.user.placeouts[i].datetime+"<br>"+"发布人描述信息："+data.user.placeouts[i].pet.petdescri+"</p></div>";
            $("#useradopt-info").append(html);
            }
           
        },
        error: function(){
        	console.log("获取.fail");
        }
    });  
    }    
//点击修改按钮触发函数，上传服务器修改
$("#btn-save").click(function(){
    var name =$("#name").val();
    var email=$("#email").val();  
    var password=$("#password").val();
    var realname =$("#realname").val();
    var sex=$("#sex").val();  
    var number=$("#number").val();
    var address =$("#address").val();
   
    if(name!=""&&email!=""&&password!=""&&number!=""){  
     $.ajax({  
        type: "POST",   //请求方式  
        url: "/views/registerEvent",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        data: JSON.stringify({"name":name,"email":email,"password":password,"realname":realname,"sex":sex,"number":number,"address":address}), 
        dataType: "json",   //返回格式为json   
        success: function (data) {//回调函数
                if(data.status=='success'){                  
                    alert("修改成功");
                    //服务器返回用户数据json包，获取并修改原来的值                                 
		            $("#name").val(data.name);
		            $("#realname").val(data.realname);
		            $("#sex").val(data.sex);
		            $("#password").val(data.password);
		            $("#number").val(data.number);
		            $("#email").val(data.email);
		            $("#address").val(data.address);
                }
                else if(user.status=='fail')
                    {                       
                       alert("请确认您的修改后的邮箱是否已被注册！");
                }
                
            },
        error: function (xhr,error) {
                console.log("data.fail");
            }  
     }); 
       }
     else {alert("请完整填写个人信息！"); }
      
 });
    


