
 $("#btn1").click(function(){
   //发送ajax请求
  var adoptSpecies=$("input[name='adoptSpecies']:checked").val();  
  var petSex=$("input[name='petSex']:checked").val(); 
  var adoptDes=$("#adoptDes").val();
  var placeInTitle=$("input[name='placeInTitle").val();
  var p=new Date();
  var datetime = p.getFullYear() + "-" +((p.getMonth()+1)<10?"0":"")+(p.getMonth()+1)+"-"+(p.getDate()<10?"0":"")+p.getDate();
  var touchName=$("input[name='touchName']").val();
  var telNumber=$("input[name='telNumber']").val();
  $.ajax({
  type:'POST',  
  url:"/views/send_adopt",
  contentType: "application/json; charset=utf-8",
  data:JSON.stringify({"adopt":{"adoptSpecies":adoptSpecies,"petSex":petSex,"adoptDes":adoptDes,"placeInTitle":placeInTitle,"datetime":datetime,"touchName":touchName,"telNumber":telNumber}}),
  dataType:"json",
  success:function(data){
  console.log(2);
   if(data.status=='success'){
    alert("发布成功！");
    window.location.href="index.html";
   }
   else alert("请重新输入");
  },
  error: function (xhr,error) {
                console.log("out-adopt.fail");
            }  
  });
 });

