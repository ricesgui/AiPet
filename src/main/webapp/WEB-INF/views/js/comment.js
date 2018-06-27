$(".send_discuss").click(function(){
	 var username=$("#txtHint").html();
	 if(username!=""){
		
	 var comment=$("#myEditor").val();
	// $(".send_discuss").after("<div class=discuss_info>"+comment+"</div>");
	$.ajax({
	  type:'POST',  
	  url:"/views/",
	  contentType: "application/json; charset=utf-8",
	  data:JSON.stringify({"comment":comment}),
	  dataType:"json",
	  success:function(data){
	  console.log(2);
	   if(data.status=='success'){
	    alert("评论成功！");
	    $(".send_discuss").after("<div class=discuss_info>"+comment+"</div>");
	    window.location.href="dog-adopt.html";
	   }
	   else alert("请重新输入");
	  },
	  error: function (xhr,error){
	                console.log("comment.fail");
	            }  
	  });
}
	 });


	 // $.post("#",{type:type,content:content},function(data){
		//  if(data.status==100)
		//  {alert("发送成功");
		//    $(".send_discuss").after("<div class=discuss_info>"+txtC+"</div>");
		//  }
	 // });
	

