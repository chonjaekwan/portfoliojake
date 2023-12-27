// 윈도우창이 스크롤 되는걸 감지
window.addEventListener('scroll', function(){
    console.log(scrollY);

    // 일정 px 이상 스크롤 되면 top 보임
    // 아니면 안보임(처음 상태, 최 상단일 때)
    // const btn_top = this.document.querySelector('.btn-top');
    // if(scrollY > 400) {
    //     // 버튼보임
    //     btn_top.classList.add('show');
    // }
    // else {
    //     // 버튼 안보임
    //     btn_top.classList.remove('show');
    // }

    // header 영역 배경 바꾸기
    const header = this.document.querySelector('header');
    if(scrollY >= 10) {
        // 헤더 배경 켜기
        header.classList.add('show');
    }
    else {
        // 헤더 배경 끄기
        header.classList.remove('show');
    }




})