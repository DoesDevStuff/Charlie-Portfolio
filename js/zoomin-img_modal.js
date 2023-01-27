/*Single Image zoom i.e without using class
    // Get the modal
var modal = document.getElementById('zoomin-Modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('zoomin-Img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

*/


// create references to the modal...
var modal = document.getElementById('zoomin-Modal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('zoomin-Images');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function() {
    
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}


// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "zoomin-modal-content";
     }, 400);
    
 }