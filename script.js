function openLetter(){
    document.getElementById("popup").style.display = "flex";

    setTimeout(()=>{
        document.getElementById("popup").classList.add("show");
    }, 50);
}

function closeLetter(event){
    if(event.target.id === "popup" || event.target.className === "close"){
        document.getElementById("popup").classList.remove("show");

        setTimeout(()=>{
            document.getElementById("popup").style.display = "none";
        }, 200);
    }
}