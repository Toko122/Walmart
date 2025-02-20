function drop() {
    const vissible = document.getElementById("show");
    
    if (vissible.style.display === "none" || vissible.style.display === "") {
        vissible.style.display = "flex";
    } else {
        vissible.style.display = "none";
    }
}


function drop2(){
    const dropDown = document.getElementById("drop");
    
    if (dropDown.style.display === "none" || dropDown.style.display === ""){
        dropDown.style.display = "flex";
    } else {
        dropDown.style.display = "none";
    }
}


function sign(){
    const signIn = document.getElementById("sign-in");
    
    if (signIn.style.display === "none" || signIn.style.display === "") {
        signIn.style.display = "flex";
    } else {
        signIn.style.display = "none";
    }

}



