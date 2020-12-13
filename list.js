var list=[];
var listLength=0;
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
//div 태그 만들고 안에 Create-button 태그 2개 만들기
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
//div 태그 만들고 안에 Delete-button 태그 2개 만들기
var Ddiv=document.createElement('div');
Ddiv.setAttribute("id","DeletecheckButton");
var Dbutton1=document.createElement('button');
var Dbutton2=document.createElement('button');
Dbutton1.setAttribute("id","DeleteOK");
Dbutton2.setAttribute("id","DeleteCANCEL");
Dbutton1.innerText="삭제";
Dbutton2.innerText="취소";
Ddiv.appendChild(Dbutton1);
Ddiv.appendChild(Dbutton2);
//Delete메뉴 구현때 필요한 변수들


//-----***Create 관련 함수-----------------------------------------

//my list에 항목 추가
function addList(){
    var aL=document.getElementById('Input').value;
    list[listLength]=aL;
    section.removeChild(label);
    section.removeChild(div);

    var li=document.createElement('li');
    li.classList+='myListLI';
    li.setAttribute('name','myListLI');
    var ul=document.getElementById('myList');
    var text=document.createTextNode(aL);
    var p=document.createElement('p');
    p.appendChild(text);
    li.appendChild(p);
    ul.appendChild(li);
     
    alert('항목추가완료');
    listLength++;
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
//-----***------------------------------------------------------

// Delete 관련 함수-----------------------------------------------

//체크박스 UI생성 함수
function ShowCheckBox(){
    var li=document.getElementsByClassName('myListLI');
    var checkBox;
    for(var i=0;list.length;i++)
    {
        checkBox=document.createElement('input');
        checkBox.type="checkbox";
        checkBox.setAttribute('name','checkBox');
        li[i].appendChild(checkBox);
        
    }
    var sc= document.getElementById('section');
    sc.appendChild(Ddiv);
    var ok=document.getElementById('DeleteOK');
    var cancel=document.getElementById('DeleteCANCEL');
    ok.addEventListener('click',deleteButtonOK);
    cancel.addEventListener('click',deleteButtonCancel);
}
function deleteButtonCancel(){//취소버튼 누를때 동작함수
    section.removeChild(Ddiv);
    deleteCheckBox();
    alert('항목삭제를 취소하였습니다.');
}
function deleteButtonOK(){//삭제버튼 누를때 동작함수
    var li=document.getElementsByName('myListLI');
    var checkBox=document.getElementsByName('checkBox');
    var ischecked;
    for(var i=0;i<listLength;i++)
    {
        ischecked=checkBox[i].getAttribute('checked');
        if(ischecked==true)
        {
            //li[i].remove();
        }
    }

    section.removeChild(Ddiv);
    deleteCheckBox();
}

function deleteCheckBox(){//체크박스 UI삭제함수
    //var checkBox=document.getElementsByName('checkBox');
    var li=document.getElementsByClassName('myListLI');
    
    for(var i=0;i<listLength;i++)
    {   
       // var a=document.getElementByName('checkBox');
        section.removeChild(li[i]);
    }
}
// -----------------------------------------------------------------