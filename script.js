const btn = document.querySelector('.switch');
var isDark = false;

// Listen for a input on the switch
function darkMode() {
    console.log("hey")
    console.log(isDark);

    //checking if the dark mode should be 
    if (isDark){
        //changes it dark
        document.getElementById("darkTheme").style.color = "black";
        // document.getElementsByTagName("a").style.color = "black";
        document.getElementById("darkTheme").style.background = "white";
        console.log(isDark);
        isDark = false;
    }else if (isDark == false){
        //changes it to light
        document.getElementById("darkTheme").style.color = "white";
        // document.getElementsByTagName("a").style.color = "white";
        document.getElementById("darkTheme").style.background = "#292929";
        console.log(isDark);
        isDark = true;
    }
}

function load() {
    document.getElementById("darkTheme").style.color = "black";
    document.getElementById("darkTheme").style.background = "white";
    console.log("ready and waiting");
}

// function loadA(){
//     document.getElementsByTagName("a").style.color = "black";
// }