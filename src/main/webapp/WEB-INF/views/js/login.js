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


function log(){
    alert("test");
    $.ajax({
        type: "POST",
        url: "/views/log_out",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({"event":{"evenType":"1"}}),
        dataType: "json",
        success: function () {
            
                alert("请求已提交！我们会尽快与您取得联系");
         
        },
        error: function () {
            alert("提交数据失败！");
        }
    });
}
       window.onload=log;//不要括号