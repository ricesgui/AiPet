// JavaScript Document
var imgs=[];//存储图片链接
 //为文件上传添加change事件
 //var fileM=document.getElementById('file');
 $(document).ready(function() {
 $("#file").change(function(){
  var fileM=document.getElementById('file');
  console.log(fileM.files);
  //获取文件对象，files是文件选取控件的属性，存储的是文件选取控件选取的文件对象，类型是一个数组
  var fileObj=fileM.files[0];
  //创建formdata对象，formData用来存储表单的数据，表单数据时以键值对形式存储的。
  var formData=new FormData();
  formData.append('file',fileObj);
  //创建XMLHttpRequest对象
 var xmlhttp=new XMLHttpRequest();
 //发送POST请求
 xmlhttp.open("POST","/file/upload/pet_picture",true);
 xmlhttp.send(formData);
xmlhttp.onreadystatechange=function(){
 if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
  console.log(xmlhttp.responseText);
  var obj=JSON.parse(xmlhttp.responseText);
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
})});
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
  contentType:"application/json; charset=utf-8",
  url:"/file/upload/pet_picture",
  data:{
   parameter :JSON.stringify(stu)
  },
  success:function(res){
   console.log(res.msg);
  }
  });
 });