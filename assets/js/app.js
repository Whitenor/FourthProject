// MAPS
function initMap() {
    const campus = { lat: 46.6687245, lng: 5.5536708 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: campus,
      mapId:'7281ddf8448cb43b'
    });
    const marker = new google.maps.Marker({
      position: campus,
      map: map,
    });
  }
  //callUnderline UNDERLINE

  document.getElementsByClassName("sending")[0].addEventListener("mouseenter", function(){
    document.getElementsByClassName('callUnderline')[1].classList.add('underlineFull');
    document.getElementsByClassName('callUnderline')[1].classList.remove('underlineNotFull');
  })
  document.getElementsByClassName("sending")[0].addEventListener("mouseleave", function(){
    document.getElementsByClassName('callUnderline')[1].classList.add('underlineNotFull');
    document.getElementsByClassName('callUnderline')[1].classList.remove('underlineFull');
  })
  


  document.getElementsByClassName("moveToService")[0].addEventListener("mouseenter", function(){
    document.getElementsByClassName('callUnderline')[0].classList.add('underlineFull');
    document.getElementsByClassName('callUnderline')[0].classList.remove('underlineNotFull');
  })
  document.getElementsByClassName("moveToService")[0].addEventListener("mouseleave", function(){
    document.getElementsByClassName('callUnderline')[0].classList.add('underlineNotFull');
    document.getElementsByClassName('callUnderline')[0].classList.remove('underlineFull');
  })