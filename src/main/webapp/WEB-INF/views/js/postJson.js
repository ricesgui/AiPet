
$("#third").click(function logout()
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
            var log = {"evenType":"1"};
            
         xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                { 
                    var myJSON = JSON.stringify(log);   
                }
            }
            xmlhttp.open("POST","/views/log_out",true);
            xmlhttp.send();
});