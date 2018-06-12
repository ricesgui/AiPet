
	$(function () { $("[data-toggle='tooltip']").tooltip();
		
	 });
	alert("欢迎登录Apet.com!");

function showName(str)
        {
            var xmlhttp;
            if (str=="")
            {
                document.getElementById("txtHint").innerHTML="";
                return;
            }
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
                    document.getElementById("txtHint").innerHTML=obj.tname;
                }
            }
            xmlhttp.open("GET","/resources/get_name",true);
            xmlhttp.send();
            //实现第二个提示
			var node1 = document.createElement("span");
			var text1 = document.createTextNode("您已登录");
			node1.appendChild(text1); 
			var parent1 = document.getElementById("second");
			var node2 = document.getElementById("s1");
			parent1.replaceChild(node1,node2);
			var node3 = document.getElementById("third");
			node3.innerHTML="退出";
			$("#yincang").hide();
    		$("#div-m").hide();
 			var im = document.getElementById("denglu");
            var bigImg = document.createElement("img");     //创建一个img元素  
            bigImg.src="images/maomi.jpg";   //给img元素的src属性赋值  
            bigImg.height="400";  //320个像素 不用加px  
          
            im.appendChild(bigImg);      //为dom添加子元素img  
            
        }
      window.onload=showName;//不要括号