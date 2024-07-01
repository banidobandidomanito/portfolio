{/* {<button class="rodape__button" id="theme-button" onclick="changeTheme()"><img src="./assets/icons/ico-changetheme.svg" alt="mode" width="32px"></button> */}


let dark = document.getElementById('theme').href = "./css/dark.css";
let light = document.getElementById('theme').href = "./css/style.css";

// function changeTheme(){
//     if (document.getElementById('theme').href == dark){
//         document.getElementById('theme').href = light;
//     }
//     else{
//         document.getElementById('theme').href = dark;
//     }
// }

function changeTheme(){
    document.getElementById('theme').href = dark;
    if (document.getElementById('theme').href == dark){
        document.getElementById('theme').href = light;
    }
    document.getElementById('icon-home').fill='green';
}