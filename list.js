var list=[];
//label 태그 만들기
var label=document.createElement('label');
label.setAttribute("id","create");
label.innerHTML="추가할 항목 : ";
//input 태그 만들기
var input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("size","60");
input.setAttribute("placeholder","최대 60자까지 입력하시오.");
input.setAttribute("id","Input");
label.appendChild(input);
//div 태그 만들고 안에 button 태그 2개 만들기
var div=document.createElement('div');
div.setAttribute("id","checkButton");
var button1=document.createElement('button');
var button2=document.createElement('button');
button1.setAttribute("id","OK");
button2.setAttribute("id","CANCEL");
button1.innerText="확인";
button2.innerText="취소";
div.appendChild(button1);
div.appendChild(button2);


//홈으로 돌아가는 버튼 클릭시  *******************기능 다 구현하고 고쳐보자.
//<button onclick='location.href="To-do-list.html"' id="Home">my list</a>
//var callHome=document.getElementById('Home');
//callHome.addEventListener('click',showList);


//my list에 항목 추가
function addList(){
    var aL=document.getElementById('Input').value;
    list[list.length-1]=aL;
    section.removeChild(label);
    section.removeChild(div);

    var li=document.createElement('li');
    var ul=document.getElementById('myList');
    var text=document.createTextNode(aL);
    var p=document.createElement('p');
    p.appendChild(text);
    li.appendChild(p);
    ul.appendChild(li);
     
    alert('항목추가완료');
}
//추가 기능 필드 삭제
function deleteFieldAdd(){
    section.removeChild(label);
    section.removeChild(div);
    alert('항목추가를 취소하였습니다.');
}
//추가 기능 필드 생성
function createFieldAdd(){
    var sc= document.getElementById('section');
    sc.appendChild(label);
    sc.appendChild(div);
    var ok=document.getElementById('OK');
var cancel=document.getElementById('CANCEL');
ok.addEventListener('click',addList);
cancel.addEventListener('click',deleteFieldAdd);
}

function showList(){
    for(var i=0;i<list.length;i++)
    {
        var li=document.createElement('li');
        var ul=document.getElementById('myList');
        var text=document.createTextNode(aL);
        var p=document.createElement('p');
        p.appendChild(text);
        li.appendChild(p);
        ul.appendChild(li);
    }
}
