let tabBar_Menu = document.getElementById("tabBar_Menu");
let tabBar_Open = document.getElementById("tabBar_Open");

let showHide = true;
tabBar_Menu.addEventListener("click", function(){
    if(showHide){
        tabBar_Open.classList.toggle("show");
    }else{
        tabBar_Open.classList.toggle("hide");
    }
    
});
