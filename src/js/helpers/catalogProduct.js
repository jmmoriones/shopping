const productGalleryScreen = document.getElementById("productGalleryScreen"),
      imageProductGalleryCollection = document.getElementsByClassName("productData-galleryProduct_smallImage-image");

productGalleryScreen.src = imageProductGalleryCollection[0].src;

function changeImage(e){
  imageProductGalleryCollection[0].classList.remove("image-select");
  productGalleryScreen.src = e.target.currentSrc
  //console.log(e)
  for(var i = 0; i < imageProductGalleryCollection.length; i++){
    //console.log(imageProductGalleryCollection[i])
    imageProductGalleryCollection[i].className = imageProductGalleryCollection[i].className.replace(" image-select", "");
  }
  e.currentTarget.className += " image-select";
}