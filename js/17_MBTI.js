// const let 중에서 변수처럼 안의 값이 변경 가능한 let 사용
let 정답 = {};

//옵션 선택 기능 만들기
function 옵션선택(선택한옵션) {
    //각 질문에 대한 답을 저장
    let 현재질문 = Object.keys(정답).length+1;//현재까지 사용자가 답한 질문의 수를 나타낸 것

    정답['문제' + 현재질문] = 선택한옵션; //정답이라는 배열에 내가 선택한 문제와 문제에 대한 옵션을 저장
    //정답[문제1] = 'E';
    //{'문제1' : 'E'} => {key, value}

    //다음질문 보여주기
    let 다음질문 = 현재질문+1;

    let 현재질문div = document.getElementById('문제' + 현재질문);
    console.log(현재질문div);
    let 다음질문div = document.getElementById('문제' + 다음질문);
    console.log(다음질문div);
    //만약 다음질문으로 오면 현재질문은 숨기고 다음질문을 보여줌
    if(다음질문div){
        현재질문div.style.display ='none'; //현재 질문 숨기기
        다음질문div.style.display ='block'; //다음 질문 보여주기
    }
    else{
        결과확인하기();
    }
}
function 결과확인하기() {
    let 결과확인 = "당신의 성격 유형은 ";
    let MBTI갯수확인 = {'E':0, 'I':0, 'S':0, 'N':0, 'T':0, 'F':0, 'J':0, 'P':0};
    
    //문제에 대해 체크한 답을 더함

    for(let 문제 in 정답){ //반복적인 작업을 수행하는 for문
    //{'문제1' : 'E'}
    console.log("문제 : " + 문제);
    //console.log("정답들 : " + 정답);
    MBTI갯수확인[정답[문제]]++;
    console.log("MBTI확인 : " + [정답[문제]]);
    console.log("MBTI갯수확인 : " + MBTI갯수확인[정답[문제]]);
    // 배열[배열key값] = value값; =>이 적용되는가?
    /*
    첫 번째 반복
    문제 = 문제1
    정답[문제] = 정답[문제1] = E or I 일 경우
    MBTI갯수확인 배열에 1을 추가함

    문제 = 문제2
    정답[문제] = 정답[문제2] = S or N
    let MBTI갯수확인 = {'E':1, 'I':0, 'S':0, 'N':0, 'T':0, 'F':0, 'J':0, 'P':0};
    -> 여기에 S 또는 N에 1 추가
    
    문제 = 문제3
    정답[문제] = 정답[문제3] = T or F
    let MBTI갯수확인 = {'E':1, 'I':0, 'S':1, 'N':0, 'T':0, 'F':0, 'J':0, 'P':0};
    -> 여기에 T 또는 F에 1 추가

    문제 = 문제4
    정답[문제] = 정답[문제4] = J or {}
    let MBTI갯수확인 = {'E':1, 'I':0, 'S':1, 'N':0, 'T':1, 'F':0, 'J':0, 'P':0};
    -> 여기에 J 또는 P에 1 추가*/
    }

    //MBTI 결과 계산
    //E가 I보다 많다면
    if(MBTI갯수확인['E'] > MBTI갯수확인['I']){
    결과확인+='E';
    }
    else{
    결과확인+="I";
    }

    //S가 N보다 많다면
    if(MBTI갯수확인['S'] > MBTI갯수확인['N']){
    결과확인+='S';
    }
    else{
    결과확인+="N";
    }

    //T가 F보다 많다면
    if(MBTI갯수확인['T'] > MBTI갯수확인['F']){
    결과확인+='T';
    }
    else{
    결과확인+="F";
    }

    //J가 P보다 많다면
    if(MBTI갯수확인['J'] > MBTI갯수확인['P']){
    결과확인+='J';
    }
    else{
    결과확인+="P";
    }
    document.getElementById("결과확인").innerText = 결과확인;
    document.getElementById("결과확인").style.display = 'block';
}   
