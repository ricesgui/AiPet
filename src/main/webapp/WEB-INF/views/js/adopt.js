  var stu = {};
//var input = document.getElementById('file');
    $("file").addEventListener('change', function(e){
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
//  serializeArray()将form表单控件中的数据序列化成数组,数组中含有若干对象,对象包含对应控件的name和value
 
  // var stu = {};
  // var infor = $('#form').serializeArray();
  // console.log(infor);
  // for (var i=0;i<infor.length;i++) {
  // var obj=infor[i];
  // stu[obj.name] = obj.value;
  // }
  // stu["petDescri"]=document.getElementById("txt1").value;
  // console.log(stu);
   //发送ajax请求
  var petspecies=$("input[name='petSpecies']:checked").val();  
  var name=$("input[name='petName']").val();
  var sex=$("input[name='petSex']:checked").val(); 
  var age_year=$("input[name='petAgeYear']").val();
  var age_month=$("input[name='petAgeMonth']").val();
  var weight=$("input[name='weight']").val();
  var petdescri=$("input[name='petDescri']").val();
  var petphotourl=stu["petPhotourl"];
  var placeouttitle=$("input[name='placeOutTitle").val();
  var realname=$("input[name='realName']").val();
  var sex=$("input[name='userSex']").val();
  var telNumber=$("input[name='telNumber']").val();
  var address=$("input[name='userAddress']").val();


  $.ajax({
  type:'POST',  
  url:"/views/sendpet",
  contentType: "application/json; charset=utf-8",
  //data:JSON.stringify(stu),
  data.JSON.stringify({"pet":{"petspecies":petspecies,"name":petname,"sex":petsex,"age_year":age_year,"age_month":age_month,"weight":weight,"petdescri":petdescri,"petphotourl":petphotourl},"placeout":{"placeouttitle":placeouttitle,"datatime":datatime,"realname":realname,"address":address}}),
  dataType:"json",
  success:function(data){
  console.log(2);
   if(data.status=='success'){
    window.location.href="index.html";
   }
   else alert("请重新输入");
  },
  error: function (xhr,error) {
                console.debug(xhr);
                console.debug(error);
            }  
  });
 });