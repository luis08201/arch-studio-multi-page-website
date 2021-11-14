let paginationBtn = document.querySelectorAll('.home__pagination--btn');
let slider = document.querySelectorAll('.home__slide');


paginationBtn.forEach(boton => {
    boton.onclick = () => {
        paginationBtn.forEach(cta => cta.classList.remove('active'));
        boton.classList.add('active');  
        
        let dataFilter = boton.getAttribute('data-pagination');

        slider.forEach(slide => {
            slide.classList.remove('active');
            slide.classList.add('hide');

            if(slide.getAttribute('data-pagination') == dataFilter){
                slide.classList.add('active');
                slide.classList.remove('hide');                
            }
        })
    }
});

