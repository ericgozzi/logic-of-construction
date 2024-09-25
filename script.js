function showCarousel(){
    carousel = document.getElementById("carousel")
    console.log(carousel.style.display)
    if(carousel.style.display == "none"){
        carousel.style.display = "block"
    }else{
        carousel.style.display = "none"
    }
}


function goToCosmicGarage(){
    window.open("https://cosmic-garage.netlify.app/");
}


function main(){
    document.getElementById("carousel").display.style = "none";
}