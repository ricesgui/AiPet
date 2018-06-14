
 function checkuser(str)
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
            var txt={"email":"dengxiaogui@163.com","password":"123456"};
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    var test =JSON.parse(xmlhttp.responseText);
                    var obk = eval("("+value+")");
                    if(obk.evenType=="1"){
                        alert("用户名错误！")；
                    }
              
                else {
                    alert("error");
                }
                }
            }
            xmlhttp.open("POST","/resources/get_name",true);
            xmlhttp.send();
        }
      $("#third").click(function logout(){
                    var xmlhttp1;
                    var log ={"evenType":"1"};
                    if (window.XMLHttpRequest)
                    {
                        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                        xmlhttp1=new XMLHttpRequest();
                    }
                    else
                    {
                        // IE6, IE5 浏览器执行代码
                        xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange=function()
                    {
                        if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
                        {
                            alert("test");
                            var log =JSON.stringify(log);
                            
                        }
                    }
                    xmlhttp1.open("POST","/views/log_out",true);
                    xmlhttp1.send();
                   }