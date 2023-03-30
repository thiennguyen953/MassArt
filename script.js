    // zoomIn class
    var images = document.getElementsByClassName("zoomIn");

    // Get the modal
    var modal = document.getElementById("modal");

    // Get the image and insert it inside the modal
    var zoomImg = document.getElementById("zoomImg");

    // Get the element that closes the modal
    var zoomOut = document.getElementsByClassName("zoomOut")[0];
    var modalBg = document.getElementsByClassName("modalBg")[0];

    for(let i=0; i<images.length; i++) {
      images[i].onclick = function(){
        modal.style.display = "block";
        zoomImg.src = this.src;
        document.body.style.overflowY = "hidden";
      }
    }

    // Close the modal
    zoomOut.onclick = function() {
      modal.style.display = "none";
      zoomOut.style.display = "none";
      document.body.style.overflowY = "scroll";
    }

    modalBg.onclick = function() {
      modal.style.display = "none";
      zoomOut.style.display = "none";
      document.body.style.overflowY = "scroll";
    }