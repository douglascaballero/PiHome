function menudash(){
    var p = 0;
    var left_panel = document.getElementById("left-menu")
    var text_home = document.getElementsByClassName("text-home");
    if(left_panel.clientWidth == 40){
        zoom_out();
    }
    else{
        zoom_in();
    }
}

function zoom_out(){
    var left_panel = document.getElementById("left-menu");
    var text_home = document.getElementById("text-home");
    left_panel.style.cssText = "width: 300px";
    text_home.style.cssText = "display: flex; margin-left: 50px;";
}

function zoom_in(){
    var left_panel = document.getElementById("left-menu")
    var text_home = document.getElementById("text-home");
    left_panel.style.cssText = "width: 40px";
    text_home.style.cssText = "display: none";
}

function prueba(){
    alert("Mas")
}

