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



console.log(document.getElementsByClassName('callUnderline'))


  // document.getElementsByClassName("acceuilTop")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[0].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[0].classList.remove('underlineInexist');
  // })
  // document.getElementsByClassName("acceuilTop")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[0].classList.add('underlineInexist');
  //   document.getElementsByClassName('callUnderline')[0].classList.remove('underlineFull');
  // })


  // document.getElementsByClassName("ourRealisationsTop")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[1].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[1].classList.remove('underlineInexist');
  // })
  // document.getElementsByClassName("ourRealisationsTop")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[1].classList.add('underlineInexist');
  //   document.getElementsByClassName('callUnderline')[1].classList.remove('underlineFull');
  // })


  // document.getElementsByClassName("ourServicesTop")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[2].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[2].classList.remove('underlineInexist');
  // })
  // document.getElementsByClassName("ourServicesTop")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[2].classList.add('underlineInexist');
  //   document.getElementsByClassName('callUnderline')[2].classList.remove('underlineFull');
  // })

  // document.getElementsByClassName("contactTop")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[3].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[3].classList.remove('underlineInexist');
  // })
  // document.getElementsByClassName("contactTop")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[3].classList.add('underlineInexist');
  //   document.getElementsByClassName('callUnderline')[3].classList.remove('underlineFull');
  // })




  // document.getElementsByClassName("moveToService")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[4].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[4].classList.remove('underlineNotFull');
  // })
  // document.getElementsByClassName("moveToService")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[4].classList.add('underlineNotFull');
  //   document.getElementsByClassName('callUnderline')[4].classList.remove('underlineFull');
  // })



  // document.getElementsByClassName("sending")[0].addEventListener("mouseenter", function(){
  //   document.getElementsByClassName('callUnderline')[5].classList.add('underlineFull');
  //   document.getElementsByClassName('callUnderline')[5].classList.remove('underlineNotFull');
  // })
  // document.getElementsByClassName("sending")[0].addEventListener("mouseleave", function(){
  //   document.getElementsByClassName('callUnderline')[5].classList.add('underlineNotFull');
  //   document.getElementsByClassName('callUnderline')[5].classList.remove('underlineFull');
  // })