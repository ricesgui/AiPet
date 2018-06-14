// JavaScript Document
var imgs=[];//存储图片链接
 //为文件上传添加change事件
 var fileM=document.querySelector("#file");
 $("#file").on("change",function(){
  console.log(fileM.files);
  //获取文件对象，files是文件选取控件的属性，存储的是文件选取控件选取的文件对象，类型是一个数组
  var fileObj=fileM.files[0];
  //创建formdata对象，formData用来存储表单的数据，表单数据时以键值对形式存储的。
  var formData=new FormData();
  formData.append('file',fileObj);
  //创建ajax对象
 var ajax=new XMLHttpRequest();
 //发送POST请求
 ajax.open("POST","/file/upload/pet_picture",true);
 ajax.send(formData);
 ajax.onreadystatechange=function(){
 if (ajax.readyState == 4&&ajax.status==200){
  console.log(ajax.responseText);
  var obj=JSON.parse(ajax.responseText);
  alert(obj.msg);
  if(obj.err == 0){
   //上传成功后自动动创建img标签放在指定位置
   var img =$("<img src='"+obj.msg+"' alt='' />");
   $(".con").append(img);
   imgs.push(obj.msg);
  }else{
   alert(obj.msg);
  }
  }
 }
});
//完成form表单数据的提交
 $('#btn').on('click',function(){
//  serializeArray()将form表单控件中的数据序列化成数组,数组中含有若干对象,对象包含对应控件的name和value
  var infor = $('#form').serializeArray();
//  console.log(infor);
  var stu = {};
  for (var i=0;i<infor.length;i++) {
  var obj=infor[i];
  stu[obj.name] = obj.value;
  }
  stu["imgs"] = imgs;
  stu["imgs"] = imgs[0];
 
  //发送ajax请求
  $.ajax({
  url:"...",
  data:{
   parameter :JSON.stringify(stu)
  },
  success:function(res){
   console.log(res.msg);
  }
  });
 });