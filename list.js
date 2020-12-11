var list=[];

var ok=document.getElementById('OK');
var cancel=document.getElementById('CANCEL');
    ok.addEventListener('click',addList);
    cancel.addEventListener('click',function(){alert('항목추가를 취소하였습니다.')});   

function addList(){
    var aL=document.getElementsByTagName('input').value;
    list.push(aL);
    alert('항목추가완료');
}
