        //키 다운 : 배경색-lightblue, 글자색-lightpink
        //키 업 : 배경색-lightpink, 글자색-lightblue
        const keys = document.querySelectorAll(".key");
       function 키다운기능(e){
            let numSave;
            switch(e.key){
                case 'a' : numSave=0;
                break;
                case 's' : numSave=1;
                break;
                case 'd' : numSave=2;
                break;
                case 'f' : numSave=3;
                break;
                case 'g' : numSave=4;
                break;
                default : return;
            }
            keys[numSave].style.background = "lightblue";
            keys[numSave].style.color = "lightpink";            
        };
        function 키업기능(e){
            let numSave;
            switch(e.key){
                case 'a' : numSave=0;
                break;
                case 's' : numSave=1;
                break;
                case 'd' : numSave=2;
                break;
                case 'f' : numSave=3;
                break;
                case 'g' : numSave=4;
                break;
                default : return;
            }
            keys[numSave].style.background = "lightpink";
            keys[numSave].style.color = "lightblue";            
        };
        document.addEventListener("keydown", 키다운기능);
        document.addEventListener("keyup", 키업기능);
