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
    var text_summary = document.getElementById("text-summary");
    var text_energy = document.getElementById("text-energy");
    var text_map = document.getElementById("text-map");
    var text_tools = document.getElementById("text-tools");
    var text_settings = document.getElementById("text-settings")
    var text_notifications = document.getElementById("text-notification");
    var text_users = document.getElementById("text-user");
    var header = document.getElementById("header");
    left_panel.style.cssText = "width: 300px";
    text_home.style.cssText = "display: flex; margin-left: 50px;";
    text_summary.style.cssText = "display: flex; margin-left: 50px;";
    text_energy.style.cssText = "display: flex; margin-left: 50px;";
    text_map.style.cssText = "display: flex; margin-left: 50px;";
    text_tools.style.cssText = "display: flex; margin-left: 50px;";
    text_settings.style.cssText = "display: flex; margin-left: 50px;";
    text_notifications.style.cssText = "display: flex; margin-left: 50px;";
    text_users.style.cssText = "display: flex; margin-left: 80px;";
    header.style.cssText = "margin-left: 300px;";
}

function zoom_in(){
    var left_panel = document.getElementById("left-menu")
    var text_home = document.getElementById("text-home");
    var text_summary = document.getElementById("text-summary");
    var text_energy = document.getElementById("text-energy");
    var text_map = document.getElementById("text-map");
    var text_tools = document.getElementById("text-tools");
    var text_settings = document.getElementById("text-settings")
    var text_notifications = document.getElementById("text-notification");
    var text_users = document.getElementById("text-user");
    var header = document.getElementById("header");
    left_panel.style.cssText = "width: 40px";
    text_home.style.cssText = "display: none";
    text_summary.style.cssText = "display: none";
    text_energy.style.cssText = "display: none";
    text_map.style.cssText = "display: none";
    text_tools.style.cssText = "display: none";
    text_settings.style.cssText = "display: none";
    text_notifications.style.cssText = "display: none";
    text_users.style.cssText = "display: none";
    header.style.cssText = "margin-left: 40px;";
}

function prueba(){
    alert("Mas")
}

