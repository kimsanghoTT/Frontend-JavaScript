function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleButton = document.getElementById("toggle-button");

    //chatContainer.style.display==""
    //초기값이 빈 문자열일 수 있기 때문
    if(chatContainer.style.display=="none" || chatContainer.style.display==""){
        chatContainer.style.display="flex";
        toggleButton.textContent = "채팅숨기기";
    }
    else{
        chatContainer.style.display="none";
        toggleButton.textContent="채팅펼치기";
    }
}
function 메세지보이기(message, sender){
    
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");


    //            div 클래스 명 : message ,    user or bot에 -message를 붙임
    messageElement.classList.add("message", sender + "-message");
    messageElement.textContent = message; //메세지 보이기
    chatbox.appendChild(messageElement); //보낸 내용 추가하기
}
메세지보이기("안녕하세요. 상담봇입니다. 원하시는 메뉴를 선택해주세요", "bot");
//JS는 매개변수가 함수에서 설정한 매개변수와 작성해야하는 매개변수의 개수가 달라도 진행이 가능
function sendMessage() {
    
    const inputbox = document.getElementById("user_input");
    const message = inputbox.value.trim(); //trim() : 공백 제거

    //만약에 아무런 메세지 없이 보내기를 방지하길 원한다면
    if(message =="") return; //return을 추가해서 더이상 밑으로 못가게 끝내기
    
    메세지보이기(message, "user");
    inputbox.value = ""; //input 값에 새로운 값으로 ""를 넣어 메세지 내용을 초기화

    //채팅봇 띄우기
    setTimeout(() => {
        메세지보이기("저는 채팅봇입니다.", "bot")
    }, 1000); //1초 후에 메세지 보이기
}