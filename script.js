window.addEventListener('resize', function() {
    var img = document.getElementById('picture');
  
    if (window.innerWidth < 750) {
      img.src = "./images/image-product-mobile.jpg";
    } else {
      img.src = "./images/image-product-desktop.jpg";
    }
  });
