function add(){
    var x=document.getElementById('job').value;
    x="<span>* </span>"+x+"<br>";
    document.getElementById('list').innerHTML+=x;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}