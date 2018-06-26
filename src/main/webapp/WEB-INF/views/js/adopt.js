  var stu = {};
  var path;
var even= document.getElementById('file');
    even.addEventListener('change', function(e){
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append('file', file);
        for (var value of formData.values()) {
        }
  $.ajax({
    url:"/file/upload/pet_picture",
    type:'POST',
    async:true,
    data:formData,
    fileElementId:"file",
    dataType:"json",
    processData:false,
    contentType:false,
    success:function(responseStr){
      if(responseStr.status=="success"){
        $("#loadPic").html("上传成功");
        $("#loadPic").css({"color":"green","font-size":"20px"});
      var img =$("<img src='"+responseStr.url+"' alt='' />");
      $("#con").append(img);
      stu["petPhotourl"] = responseStr.url;
      path = responseStr.url;
      }
      else if(responseStr.status=="fail")
      {
        $("#loadPic").html("上传失败，请重传");
        $("#loadPic").css({"color":"red","font-size":"20px"});
      }
    },
    error:function(responseStr){
      console.log("error");
    }
  });
  }, false);
//完成form表单数据的提交
 $("#btn").click(function(){
   //发送ajax请求
  var petspecies=$("input[name='petspecies']:checked").val();  
  var name=$("input[name='name']").val();
  var sex=$("input[name='sex']:checked").val(); 
  var age_year=$("input[name='age_year']").val();
  var age_month=$("input[name='age_month']").val();
  var weight=$("input[name='weight']").val();
  var petdescri=$("#txt1").val();
  var petphotourl=path;
  var placeouttitle=$("input[name='placeouttitle").val();
  var d=new Date();

var datetime = d.getFullYear() + "-" +((d.getMonth()+1)<10?"0":"")+(d.getMonth()+1)+"-"+(d.getDate()<10?"0":"")+d.getDate();
  var realname=$("input[name='realname']").val();
  var number=$("input[name='number']").val();
  var address=$("input[name='address']").val();
  $.ajax({
  type:'POST',  
  url:"/views/send_adopt",
  contentType: "application/json; charset=utf-8",
  data:JSON.stringify({"pet":{"petspecies":petspecies,"name":name,"sex":sex,"age_year":age_year,"age_month":age_month,"weight":weight,"petdescri":petdescri,"petphotourl":petphotourl},"placeout":{"placeouttitle":placeouttitle,"datetime":datetime,"realname":realname,"number":number,"address":address}}),
  dataType:"json",
  success:function(data){
  console.log("adopt.success");
   if(data.status=='success'){
    alert("发布成功！");
    window.location.href="index.html";
   }
   else alert("请重新输入");
  },
  error: function (xhr,error) {
                console.log("adopt.fail");
            }  
  });
 });

