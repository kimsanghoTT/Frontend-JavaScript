function 보이기숨기기(){
    const 박스 = document.getElementById("토글박스");
    //contains : 클래스 목록에 hidden 클래스가 포함되어 있는지 확인
    if(박스.classList.contains("추가할클래스")){
        //만약에 존재한다면 hidden을 삭제
        박스.classList.remove("추가할클래스");

    }
    else{
        //만약 없다면 hidden을 추가
        박스.classList.add("추가할클래스");
    }
}