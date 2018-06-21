	var str1="";
  /**生成一个随机数**/
  function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
  }
  /**生成一个随机色**/
  function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
  }
  drawPic();
  document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    drawPic();
  }

  /**绘制验证码图片**/
  function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';
    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
	  str1="";
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
      ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
      var x = 10+i*25;
      var y = randomNum(25,45);
      var deg = randomNum(-45, 45);
      //修改坐标原点和旋转角度
      ctx.translate(x,y);
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(txt, 0,0);
      //恢复坐标原点和旋转角度
      ctx.rotate(-deg*Math.PI/180);
      ctx.translate(-x,-y);
	  str1+=txt;
    }
    /**绘制干扰线**/
    for(var i=0; i<8; i++){
      ctx.strokeStyle = randomColor(40,180);
      ctx.beginPath();
      ctx.moveTo( randomNum(0,width), randomNum(0,height) );
      ctx.lineTo( randomNum(0,width), randomNum(0,height) );
      ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<100; i++){
      ctx.fillStyle = randomColor(0,255);
      ctx.beginPath();
      ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      ctx.fill();
    }
  }
  function check_checknum(f)
  {
    var str2=str1.toUpperCase();
    var str3=f.toUpperCase();
	  if(str3==str2) 
	  {
	  	var node=document.getElementById("checknum_result");
		  node.innerHTML="验证码正确 ";
		  node.style.color="#0F0";//DOM改变样式
		  return true;
	  }
	  else {
	  	var node=document.getElementById("checknum_result");
		  node.innerHTML="验证码错误 ";
		  node.style.color="#F00";
		  return false;
	  }
  }

$("#email").blur(function(){   
    var email=$("#email").val();  
    if(email!=""){  
     $.ajax({  
        url: "/check/username",    //请求的url地址  
        contentType: "application/json; charset=utf-8",  
        dataType: "json",   //返回格式为json  
        async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
        data: JSON.stringify({"email":email}), //使用这个函数可以转化为json格式   //参数值  
        type: "POST",   //请求方式  
         /*  因为服务器端返回的是json对象所以可以直接用对象名。属性名 */  
       success: function (data) {
                if(data.validity=='fail'){
                 $("#e2").html("邮箱不存在");
                }
                $("#e2"）.css({"color":"red","font-size":"20px"});
             ｝
                else{ 
                    $("#e2").html("邮箱存在");
                    $("#e2").css({"color":"red","font-size":"20px"});
            }
            },
        error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }
            
     });  
    }
});