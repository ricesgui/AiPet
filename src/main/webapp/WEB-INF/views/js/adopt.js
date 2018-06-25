  var stu = {};
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
  // var datatime=new Date();
  // console.log(stu);
   //发送ajax请求
  var petspecies=$("input[name='petspecies']:checked").val();  
  var name=$("input[name='name']").val();
  var sex=$("input[name='sex']:checked").val(); 
  var age_year=$("input[name='age_year']").val();
  var age_month=$("input[name='age_month']").val();
  var weight=$("input[name='weight']").val();
  var petdescri=$("input[name='petdescri']").val();
  var petphotourl=stu["petphotourl"];
  var placeouttitle=$("input[name='placeouttitle").val();
  var datatime=new Date();
  var realname=$("input[name='realname']").val();
  var number=$("input[name='number']").val();
  var address=$("input[name='address']").val();

  $.ajax({
  type:'POST',  
  url:"/views/sendpet",
  contentType: "application/json; charset=utf-8",
  //data:JSON.stringify(stu),
  data:JSON.stringify({"pet":{"petspecies":petspecies,"name":name,"sex":sex,"age_year":age_year,"age_month":age_month,"weight":weight,"petdescri":petdescri,"petphotourl":petphotourl},"placeout":{"placeouttitle":placeouttitle,"datatime":datatime,"realname":realname,"number":number,"address":address}}),
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

