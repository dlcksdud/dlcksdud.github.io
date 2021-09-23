// 로그인
// localStorage.clear(); 
 function login(){

    
    var members = JSON.parse(localStorage.getItem("members"));
    var isMember = false;
    
    //id pw판정
    for(var i = 0; i < members.length; i++){
        if(id.value == members[i]["id"] && pwd.value == members[i]["pwd"]){
            alert("Welcome to my homepage!");
            // 새로운 팝업창 열기
            // window.open('팝업 주소', '팝업창 이름', '팝업창 설정');
            window.open("./index.html", "");
            isMember = true;
            break;
        }
        else{
            console.log("continue");
            continue;
        }
    }
    if(!isMember){
        alert("아이디와 비밀번호가 일치하지 않습니다."); 
    }
}