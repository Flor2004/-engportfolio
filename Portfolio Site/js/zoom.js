function zoomIn(event) {
    var zoom = event.currentTarget.nextElementSibling;
    zoom.style.display = "block";
  }
  
  function zoomOut(event) {
    event.currentTarget.style.display = "none";
  }
  