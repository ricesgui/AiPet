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
    console.log(test);
    $.ajax({
        type: "POST",
        url: "/views/log_out",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({"evenType":"1"}),
        dataType: "json",
        success: function () {//回调函数
         console.log(success);
        },
        error: function (xhr,error) {
            console.debug(xhr);
            console.debug(error);
        }
    });
}
  