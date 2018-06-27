$(".send_discuss").click(function(){
	 var username=document.getElementById("txtHint").innerHTML;
	 console.log(username);
	 // var username=$("#txtHint").html();
	  if(username==" "){
	  	alert("请先登录");
	  	location.href="../login.html";
	  	return ;
	  }
	  var comment=$(".send_discuss").val();
	  var p=new Date();
  	  var datetime = p.getFullYear() + "-" +((p.getMonth()+1)<10?"0":"")+(p.getMonth()+1)+"-"+(p.getDate()<10?"0":"")+p.getDate();
  
	  	// $(".send_discuss").after("<div class=discuss_info>"+comment+"</div>");
	$.ajax({
	  type:'POST',  
	  url:"/views/send_comment",
	  contentType: "application/json; charset=utf-8",
	  data:JSON.stringify({"comment":{"comment":comment,"datetime":datetime},"users":{"username":username}}),
	  dataType:"json",
	  success:function(data){
	  console.log(2);
	   if(data.status=='success'){
	    alert("评论成功！");
	    var txt=document.createElement('div');
	    txt.className("discuss_info");
	    txt.innerHTML=comment;
	    var txt1=document.createElement('div');
	    txt1.className("post_time");
	    txt1.innerHTML=newdate;
	    var txt2=document.createElement('div');
	    txt2.className("post_name");
	    txt2.innerHTML=data.name;
	    var txt3="<hr>";
	    $(".send_discuss").after(txt,txt2,txt1,txt3);
	    window.location.href="dog-adopt.html";
	   }
	   else alert("请重新输入");
	  },
	  error: function (xhr,error){
	                console.log("comment.fail");
	            }  
	  });

	 });


