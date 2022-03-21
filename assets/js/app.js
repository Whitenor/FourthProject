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

  
  var burger = document.getElementById('burger');
  var closeNav = document.getElementById('closeNav');
  var mobileNav = document.getElementById('mobileNavTest');
  
  burger.addEventListener('click', function(){
      mobileNav.classList.remove('none');
  
      setTimeout(() => {
          mobileNav.classList.add('openNav');
          document.getElementsByClassName('navBarTop')[0].classList.add('changeColorBackground');
      }, 200);
      
      this.classList.add('none');
      closeNav.classList.remove('none');
  })
  
  closeNav.addEventListener('click', function(){
  
      mobileNav.classList.remove('openNav');
  
      setTimeout(() => {
          mobileNav.classList.add('none');          
          document.getElementsByClassName('navBarTop')[0].classList.remove('changeColorBackground');
      }, 200);
     
      this.classList.add('none');
      burger.classList.remove('none');
      
  })