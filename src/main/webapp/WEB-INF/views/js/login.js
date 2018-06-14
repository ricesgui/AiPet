  /*      $("#s1").click(function(){  
            alert("test");
        $.ajax({
            type:"POST",
            url:"/views/log_out",
            contentType:"application/json",
            dataType:"json",
            data:JSON.stringify({"event":{"evenType":"1"}}),
            success:function(){
                alert("success");
            },
            error:function(){
                alert("error");
            }
        });
        });  $("#third").click(function() {


*/
document.getElementById("third").onclick=function(){
    alert("test");
    $.ajax({
        type: "POST",
        url: "/views/log_out",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({"evenType":"1"}),
        dataType: "json",
        success: function () {
            
                alert("请求已提交！我们会尽快与您取得联系");
         
        },
        error: function (xhr,error) {
            console.debug(xhr);
            console.debug(error);
        }
    });
}
  