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
    console.log(media.alt)
    imageAlt = media.alt;
    imageDescription = getRightDescription(imageAlt);
    descriptionDiv = document.getElementById("descriptionDiv");
    descriptionDiv.innerHTML = imageDescription;
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

function getRightDescription(drawingTitle){
    if(drawingTitle == "MusicFactory"){
        return "<h2 class='description'>Music Factory</h2><p class='description'>2022</p><p class='description'>60 x 80</p></div>"
    }else if(drawingTitle =="RecordTransporter"){
        return "<h2 class='description'>Record Transporter</h2><p class='description'>2022</p><p class='description'>60 x 80</p></div>"
    }else if(drawingTitle =="Lighthouse"){
        return "<h2 class='description'>Lighthouse</h2><p class='description'>2022</p><p class='description'>60 x 80</p></div>"
    }
}