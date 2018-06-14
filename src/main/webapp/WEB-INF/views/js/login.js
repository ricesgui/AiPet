

     /* $("#third").click(function logout(){
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
                            
                            var log =JSON.stringify(log);
                            alert("test");
                        }
                    }
                    xmlhttp1.open("POST","/views/log_out",true);
                    xmlhttp1.send();
                   }*/
        function showName()
        {
            var xmlhttp;
            var log ={"evenType":"1"};
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
            alert("test");
            xmlhttp.onreadystatechange=function()
            {
                alert("test");
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    var log =JSON.stringify(log);
                    alert(log.evenType);

                    
                }
            }
            xmlhttp.open("POST","/views/log_out",true);
            xmlhttp.send();
        } 
        window.onload=showName;