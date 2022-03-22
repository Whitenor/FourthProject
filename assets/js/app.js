// MAPS
function initMap() {
    const campus = { lat: 46.6687245, lng: 5.5536708 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: campus,
      mapId:'a7872b275aab64dd'
    });
    const marker = new google.maps.Marker({
      position: campus,
      map: map,
    });
  }


  // window.onscroll = () => {
  //   console.log(window.scrollY)
  //   if()
  // }




// Navbar Mobile

  
  var burger = document.getElementById('burger');
  var closeNav = document.getElementById('closeNav');
  var mobileNav = document.getElementById('mobileNav');
  
  burger.addEventListener('click', function(){
      mobileNav.classList.remove('none');
  
      setTimeout(() => {
          mobileNav.classList.add('openNav');
      }, 200);
      
      this.classList.add('none');
      closeNav.classList.remove('none');
  })
  
  closeNav.addEventListener('click', function(){
  
      mobileNav.classList.remove('openNav');
  
      setTimeout(() => {
          mobileNav.classList.add('none');          
      }, 200);
     
      this.classList.add('none');
      burger.classList.remove('none');
      
  })



  //  switch d'image

