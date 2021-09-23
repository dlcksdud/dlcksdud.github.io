// 회원가입
  
//검사통과여부.
var idChecked = false;
var pwdChecked = false;
var nameChecked = false;
var phoneChecked = false;

window.onload = function(){
    //id 검사
    id.addEventListener('keyup', checkId);
    function checkId(){
        if(!/^[a-zA-Z]\w{3,11}$/.test(this.value)){
            //유효성검사에 걸릴 경우 메세지 피드백
            alertId.innerHTML = "아이디는 영문+숫자 4~12자리로 사용, 영문으로 시작해주세요."
        }
        else{
            alertId.innerHTML = "";
            idChecked = true;
        }
    }

    //password 검사
    pwd.addEventListener('keyup', checkPwd);

    function checkPwd(){
        var pwdRegex = /^[a-zA-Z0-9!@#$%^&*]{4,12}/;
        if(!pwdRegex.test(this.value)){
            alertPwd.innerHTML = "비밀번호는 영문+숫자+특수문자 4~12자리로 사용해주세요.";
        }
        else{
            //id와의 중복검사
            if(id.value == this.value){
                alertPwd.innerHTML = "아이디와 비밀번호를 다르게 입력해주세요.";
            }
            else{
                alertPwd.innerHTML = "";
                pwdChecked = true;
            }
        }
    }

    //이름 검사
    userName.addEventListener('keyup', checkName);
    function checkName(){
        var nameRegex = /^[가-힣]{2,}$/;
        if(!nameRegex.test(this.value)){
            alertName.innerHTML = "이름은 한글 2글자이상을 사용해주세요.";
        }
        else{
            alertName.innerHTML = "";
            nameChecked = true;
        }
    }

    //폰번호 검사
    phone.addEventListener('keyup', checkPhone);

    function checkPhone(){
        var phoneRegex = /^01[0|1|6|7|9][0-9]{7,8}$/;

        if(!phoneRegex.test(this.value)){
            alertPhone.innerHTML = "전화번호는 -(하이픈)없이 입력해주세요.";
            // return false;
        }else{
            //확인 완료 시
            alertPhone.innerHTML = "";
            // return true;
            phoneChecked = true;
        }
    }
};

//가입하기 버튼 누를 시 (제출 시)
function submitForm(){
    //모든 검사 통과 시
    if(idChecked && pwdChecked && nameChecked && phoneChecked){
        
        //members 객체배열 생성 or localStorage에서 불러오기
        var members = JSON.parse(localStorage.getItem("members")) || [];

        //member값 담을 객체 생성자
        function Member(id, pwd, userName, phone, bday, gender){
            this.id = id;
            this.pwd = pwd;
            this.userName = userName;
            this.phone = phone;
            this.bday = bday;
            this.gender = gender;
        }

        //member Object 생성
        var gender = document.querySelector("[name=gender]:checked");
        var memberObj = new Member(id.value, pwd.value, userName.value, phone.value, bday.value, gender.value);

        //members 객체배열에 회원객체 담기
        members.push(memberObj);

        //localStorage에 members객체배열을 JSON형태로 저장
        localStorage.setItem("members", JSON.stringify(members));      

        // 회원가입완료 팝업알림
        alert("Welcome! 로그인 화면으로 이동합니다.");
        return true;
    }
    else{
        // console.log("submit fail!");
        alert("회원정보를 올바르게 입력해주세요.");
        return false;
    }
}