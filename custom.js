$(() => {


  var greenunderline = document.getElementsByTagName("h5");

  function setActive(el) {
    for (var i = 0; i < greenunderline.length; i++) {
        if (greenunderline[i] == el) {
          el.classList.toggle("active");
        } else {
          greenunderline[i].classList.remove('active');
        }
      }
  }

  for (var i = 0; i < greenunderline.length; i++) {
    greenunderline[i].addEventListener("click", function() {
      setActive(this);
    });
  }

});
