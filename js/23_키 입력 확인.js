        //화면에 존재하는 키 모두 가져오기
        //.key == class="key" 즉, 클래스가 key인 모든 내용을 가져오겠다
        const keys = document.querySelectorAll(".key");

        //keydown : 키보드에서 키가 눌려진 상태
        //document(문서전체)에서 addEventListener(감지)함 => keydown(키가 눌림을)
        document.addEventListener("keydown",function(e){
            //e : 이벤트 객체(이벤트 관련 정보가 모두 담겨 있음)
            //e.key : 입력된 키를 확인

            let 숫자값저장; //인덱스값을 저장할 변수
            switch(e.key){
                case 'q' : 숫자값저장=0;
                    break;
                case 'w' : 숫자값저장=1;
                    break;
                case 'e' : 숫자값저장=2;
                    break;
                case 'r' : 숫자값저장=3;
                    break;
                default :
                    return; //함수 종료
            }
            //숫자번호와 일치하는 key 배열의 태그색을 변경
            keys[숫자값저장].style.background ="blue";
            keys[숫자값저장].style.color ="white";
        });
        document.addEventListener("keyup",function(e){

            let 숫자값저장; //인덱스값을 저장할 변수
            switch(e.key){
                case 'q' : 숫자값저장=0;
                    break;
                case 'w' : 숫자값저장=1;
                    break;
                case 'e' : 숫자값저장=2;
                    break;
                case 'r' : 숫자값저장=3;
                    break;
                default :
                    return; //함수 종료
            }
            //숫자번호와 일치하는 key 배열의 태그색을 변경
            keys[숫자값저장].style.background ="pink";
            keys[숫자값저장].style.color ="black";
        });