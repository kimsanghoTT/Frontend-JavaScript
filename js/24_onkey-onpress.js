function 기능만들기() {
    const engName = document.getElementById("영문이름");
    engName.value = engName.value.toUpperCase();

    //toLowerCase() : 영어를 모두 소문자로 변경
    //toUpperCase() : 영어를 모두 대문자로 변경
}
function 엔터기능(e) {
    
    if(e.key === 'Enter'){
        alert("입력한 내용이 전달되었습니다.");
    }
    
}