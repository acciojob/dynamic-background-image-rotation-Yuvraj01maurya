//your JS code here. If required.
 function setBackgroundImage() {
        var backgroundImageUrl;
        
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode
            backgroundImageUrl = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";
        } else {
            // Landscape mode
            backgroundImageUrl = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";
        }
        
        document.body.style.backgroundImage = "url('" + backgroundImageUrl + "')";
    }
    
    // Call the function initially
    setBackgroundImage();
    
    // Call the function whenever the window is resized
    window.addEventListener("resize", setBackgroundImage);