
let settingmenu = document.querySelector('.settings-menu');
var darkModeBtn = document.getElementById('dark-mode-btn')

function settingsMenuToggle(){
    settingmenu.classList.toggle('settings-menu-inner')
}

 darkModeBtn.onclick = function(){
    darkModeBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

//update Local storage when its light it will change to dark
//or light

if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark")
} else {
    localStorage.setItem("theme", "light")
}

}

if(localStorage.getItem("theme") == "light"){
    darkModeBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark"){

    darkModeBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

//here theme Is name of localStorage and light Is Value
localStorage.setItem("theme", "light")

localStorage.getItem("theme")