// JavaScript Document
var imgs=[];//存储图片链接
 //为文件上传添加change事件
 //var fileM=document.getElementById('file');
 /*$(document).ready(function() {
 $("#file").change(function(){
  var fileM=document.getElementById('file');
  console.log(fileM.files);
  //获取文件对象，files是文件选取控件的属性，存储的是文件选取控件选取的文件对象，类型是一个数组
  /*var fileObj=fileM.files[0];
  //创建formdata对象，formData用来存储表单的数据，表单数据时以键值对形式存储的。
  var formData=new FormData();
  formData.append('file',fileObj);
  //formData.append('username', 'Justin');
  console.log(formData);*/
  /*var data = new FormData($('#file')[0]);
  console.log(data);
  $.ajax({
    url:"/file/upload/pet_picture",
    type:'POST',
    async:true,
    data:formData,
    fileElementId:"file",
    processData:false,
    contentType:false,
    success:function(responseStr){
      console.log("success");
      var img =$("<img src='"+responseStr+"' alt='' />");
      $(".con").append(img);
       imgs.push(responseStr);
    },
    error:function(responseStr){
      console.log("error");
    }
  })
  //创建XMLHttpRequest对象
 /*var xmlhttp=new XMLHttpRequest();
 //发送POST请求
 xmlhttp.open("POST","/file/upload/pet_picture",true);
 xmlhttp.send(formData);
 xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
  console.log(xmlhttp.responseText);
  var obj=JSON.parse(xmlhttp.responseText);
  alert(obj.msg);
  if(obj.err == 0){
   //上传成功后自动创建img标签放在指定位置
   var img =$("<img src='"+obj.msg+"' alt='' />");
   $(".con").append(img);
   imgs.push(obj.msg);
  }else{
   alert(obj.msg);
  }
  }
 }*/
var input = document.getElementById('file');
    input.addEventListener('change', function(e){
        var file = e.target.files[0];

        var formData = new FormData();
        formData.append('file', file);
        for (var value of formData.values()) {
        console.log(value); 
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
      console.log("success");
      console.log(responseStr.url);
      var img =$("<img src='"+responseStr.url+"' alt='' />");
      $("#con").append(img);
       imgs.push(responseStr.url);
    },
    error:function(responseStr){
      console.log("error");
    }
  })
  }, false);
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
  url:"/views/sendpet",
  type:'POST',
  async:true,
  dataType:"json",
  contentType: "application/json; charset=utf-8",
  contentType:false,
  data:{
   parameter :JSON.stringify(stu)
  },
  success:function(res){
   if(res.status==success){
    window.location.href="index.html";
   }
   else alert("请重新输入");
  }
  });
 });