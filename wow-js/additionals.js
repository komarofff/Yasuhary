if(document.documentElement.clientWidth<769) {
    const boxes = document.querySelectorAll('.property-box')
    for(let i=0; i<boxes.length;i++){
        if(i % 2 == 0){
            boxes[i].classList.add('wow','animate__animated','animate__fadeInLeft')
        }else{
            boxes[i].classList.add('wow','animate__animated','animate__fadeInRight')
        }
    }
    let wow = new WOW({
        Class: 'wow',      // класс блока по умолчанию
        offset: 100,          // смещение от нижнего края браузера по умолчанию
        mobile: true,       // поддержка мобильных по умолчанию
        live: true        // постоянно проверяйте наличие новых WOW-элементов на странице по умолчанию
    });
    wow.init();
}