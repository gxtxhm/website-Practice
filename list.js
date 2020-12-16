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
Ddiv.setAttribute("class","checkButton");
var Dbutton1=document.createElement('button');
var Dbutton2=document.createElement('button');
Dbutton1.setAttribute("id","DeleteOK");
Dbutton2.setAttribute("id","DeleteCANCEL");
Dbutton1.innerText="삭제";
Dbutton2.innerText="취소";
Ddiv.appendChild(Dbutton1);
Ddiv.appendChild(Dbutton2);
//div 태그 만들고 안에 Change-button 태그 2개 만들기
var Cdiv=document.createElement('div');
Cdiv.setAttribute('class','checkButton');
var Cbutton1=document.createElement('button');
var Cbutton2=document.createElement('button');
Cbutton1.setAttribute("id","ChangeOK");
Cbutton2.setAttribute("id","ChangeCANCEL");
Cbutton1.innerText="변경";
Cbutton2.innerText="취소";
Cdiv.appendChild(Cbutton1);
Cdiv.appendChild(Cbutton2);



//목록 만들때 부여할 id값 변수
var idValue=0;

//-----***Create 관련 함수-----------------------------------------

function addList(){
    var aL=document.getElementById('Input').value;
    list[listLength]=aL;
    section.removeChild(label);
    section.removeChild(div);

    var li=document.createElement('li');
    li.classList+='myListLI';
    li.setAttribute('name','myListLI');
    li.setAttribute('id',idValue);
    var ul=document.getElementById('myList');
    var text=document.createTextNode(aL);
    var p=document.createElement('p');
    p.appendChild(text);
    li.appendChild(p);
    ul.appendChild(li);
     
    alert('항목추가완료');
    listLength++;
    idValue++;
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

function showDeleteUI(){//Delete버튼누르면 체크박스와 삭제/취소 버튼생성
    var sc= document.getElementById('section');
    sc.appendChild(Ddiv);
    var Dok=document.getElementById('DeleteOK');
    var Dcancel=document.getElementById('DeleteCANCEL');
    Dok.addEventListener('click',clickDeleteButton);      
    Dcancel.addEventListener('click',clickDeleteCancelButton);  
    showCheckBox();
}

function showCheckBox(){//체크박스 UI생성
    
    for(var i=0;i<idValue;i++)
    {
        var checkBox=document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('class','checkBox');
        var li=document.getElementById(i);
        li.appendChild(checkBox);
    }
    
} 
function deleteUI(){//Delete UI 삭제함수
    section.removeChild(Ddiv);

}

function clickDeleteButton(){//삭제버튼 눌렀을때
    alert('삭제를 완료했습니다.');
    deleteUI();
    getCheckBoxValue();
    deleteCheckBox();
}

function clickDeleteCancelButton(){//취소버튼 눌렀을때
    alert('삭제를 취소합니다.');
    deleteUI();
    deleteCheckBox();
}

function deleteCheckBox(){//체크박스 삭제하기
   
    for(var i=0;i<idValue;i++)
    {
        var li=document.getElementById(i);
        li.removeChild(li.childNodes[1]);
    }
}

function getCheckBoxValue(){//체크된 체크박스 display:none으로 만들기
    for(var i=0;i<idValue;i++)
    {
        var li=document.getElementById(i);
       
        if(li.childNodes[1].checked==true)
        {
            li.style.display='none';
            
        }
    }
}
// -----------------------------------------------------------------

// Change 관련 함수--------------------------------------------------

function showChangeUI(){
    var sc= document.getElementById('section');
    sc.appendChild(Cdiv);
    var Cok=document.getElementById('ChangeOK');
    var Ccancel=document.getElementById('ChangeCANCEL');
    Cok.addEventListener('click',clickChangeButton);      
    Ccancel.addEventListener('click',clickChangeCancelButton);  
    showChangeCheckBox();
    
}

function showChangeCheckBox(){//change 체크박스 UI생성
    
    for(var i=0;i<idValue;i++)
    {
        var checkBox=document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('class','checkBox');
        checkBox.setAttribute('onclick','getCheckBoxAddText()');
        var li=document.getElementById(i);
        li.appendChild(checkBox);
    }
    
} 

function getCheckBoxAddText(){//체크된 체크박스 옆에 input 태그 추가하기
    for(var i=0;i<idValue;i++)
    {
        var li=document.getElementById(i);
       
        if(li.childNodes[1].checked==true)// 체크박스 선택 시
        {
            if(li.childElementCount<=2){
                var text=document.createElement('input');
                text.setAttribute("type","text");
                text.setAttribute("size","60");
                text.setAttribute("placeholder","최대 60자까지 입력하시오.");
                text.value=li.childNodes[0].innerHTML;
                li.appendChild(text);
            }
            
        }
        else if(li.childElementCount>2)//addText가 생성된 상황에서 체크박스 해제시 addText삭제
        {
            li.removeChild(li.childNodes[2]);
        }
        
    }
}

function deleteChangeText(){// 변경을 위한 Text 삭제
    for(var i=0;i<idValue;i++)
    {
        var li=document.getElementById(i);
        if(li.childElementCount>2)
        {
            li.removeChild(li.childNodes[2]);   
        }
        
    }
}

function deleteChangeUI(){//Change UI 삭제함수
    section.removeChild(Cdiv);

}

function changePValue(){//수정한 목록을 적용시킨다.
    for(var i=0;i<idValue;i++)
    {
        var li=document.getElementById(i);
        if(li.childElementCount>2)
        {
            li.childNodes[0].innerText = li.childNodes[2].value;
        }
        
    }
}

function clickChangeButton(){//OK버튼 눌렀을때
    alert('변경을 완료했습니다.');
    changePValue();
    deleteChangeUI();
    deleteChangeText();
    deleteCheckBox();
}

function clickChangeCancelButton(){//취소버튼 눌렀을때
    alert('변경을 취소합니다.');
    deleteChangeUI();
    deleteChangeText();
    deleteCheckBox();
}
//------------------------------------------------------------------
