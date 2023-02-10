function menudash(){
    var left_panel = document.getElementById("left-menu")
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
    left_panel.style.cssText = "width: 240px";
    text_home.style.cssText = "display: flex; margin-left: 40px;";
    text_summary.style.cssText = "display: flex; margin-left: 50px;";
    text_energy.style.cssText = "display: flex; margin-left: 50px;";
    text_map.style.cssText = "display: flex; margin-left: 50px;";
    text_tools.style.cssText = "display: flex; margin-left: 50px;";
    text_settings.style.cssText = "display: flex; margin-left: 50px;";
    text_notifications.style.cssText = "display: flex; margin-left: 40px;";
    text_users.style.cssText = "display: flex; margin-left: 80px;";
    header.style.cssText = "margin-left: 240px;";
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

function notification_out(){
    var left_notification_menu = document.getElementById("left-notification-menu");
    left_notification_menu.style.cssText = "display:block; position: fixed; top: 0px; left: 0px; width: 300px; height: 100%; background-color: #111111; z-index: 5;";
}

function notification_in(){
    var left_notification_menu = document.getElementById("left-notification-menu");
    left_notification_menu.style.cssText = "display: none;";
}