console.log("Developed by Aji Davit Muhaimin");
var preview=document.getElementById('preview');
var label=document.getElementById('label');
var inputFile=document.getElementById('inputFile');
inputFile.onchange=(ev)=>{
  console.log(inputFile.files[0]);
  preview.src=URL.createObjectURL(inputFile.files[0]);
}

function upload() {
  var formData=new FormData();
  formData.append("fileUploaded",inputFile.files[0]);
  var xhr=new XMLHttpRequest();
  xhr.open("POST","/upload",true);
  xhr.send(formData);
}