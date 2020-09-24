const btn_toggle = document.querySelector(".btn_toggle");
const main_txt = document.querySelector(".main_txt");
const name_color = document.querySelector(".name_color");

btn_toggle.addEventListener("click", ()=>{

    if(main_txt.classList[1] == "rojo"){
        main_txt.classList.remove("rojo");
        main_txt.classList.add("azul")
        btn_toggle.classList.remove("rojo");
        btn_toggle.classList.add("azul");

        name_color.innerHTML="azul";
    }else{
        main_txt.classList.remove("azul");
        main_txt.classList.add("rojo");
        btn_toggle.classList.remove("azul");
        btn_toggle.classList.add("rojo");

        name_color.innerHTML="rojo";
    
    }

});