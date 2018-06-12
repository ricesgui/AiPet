
	/*$(function () { $("[data-toggle='tooltip']").tooltip();
		
	 });
	alert("欢迎登录Apet.com!");


*/
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
        }
      window.onload=showName;//不要括号