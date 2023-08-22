var bucketlist = [];
var listitem = document.getElementById("list-container")
function addValue(){
    let value = document.getElementById("input-field").value;
    bucketlist.push(value);
    showlist();
}

function remove(i){
    bucketlist.splice(i,1);
    showlist();
}

function showlist(){
    listitem.innerHTML="";
    for(let i=0;i<bucketlist.length;i++){
        let li = document.createElement('li')
        li.innerHTML= bucketlist(i) + '<span><img class>"checked" onclick="remove('+i+')" src = "https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"/></span>';
        li.className = "list";
        listitem.appendChild(li);
    }
}

function reset(){
    bucketlist = [];
    showlist();
}