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



function openImage(media){
    lightBox = document.getElementById("lightbox");
    lightBox.style.display = "block";
    imageDiv = document.getElementById("imageDiv")
    imageDiv.innerHTML = ' <img id="lightBoxMedia" src = "' + media.src + '">';
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function showAbout(){
    about = document.getElementById("about")
    console.log(about.style.display)
    if(about.style.display == "none"){
        about.style.display = "block"
    }else{
        about.style.display = "none"
    }}