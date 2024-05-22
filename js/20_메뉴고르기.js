function showSubMenu(menu) {
    const submenu = document.getElementById("submenu");
    const submenuTitle = document.getElementById("submenu-title");
    const submenuList = document.getElementById("submenu-list");

    submenuTitle.textContent = menu + " 메뉴";
    submenuList.innerHTML = ""; // 이전에 보여준 메뉴들 모두 없애고 새로보이기

    // 선택한 메뉴에 따라 세부 메뉴 표시하기
    switch (menu) {
        case '중식':
            submenuList.innerHTML = "<li>짜장면</li><li>짬뽕</li><li>탕수육</li>";
            break;
        case '한식':
            submenuList.innerHTML = "<li>비빔밥</li><li>된장찌개</li><li>불고기</li>";
            break;
        case '일식':
            submenuList.innerHTML = "<li>초밥</li><li>라멘</li><li>돈까스</li>";
            break;
        default:
            break;
    }
    submenu.classList.remove("hidden");
}