function 중복확인() {
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    
    if(name == "고영희" && email == "ko@kh.kh"){
        alert("이미 가입된 회원입니다.");
    }
    else{
        alert("가입완료");
    }
}

function 이용약관접기() {
    const fold = document.getElementById("이용약관");
    if(fold.classList.contains("hidden")){
        fold.classList.remove("hidden");
    }
    else{
        fold.classList.add("hidden");
    }
}