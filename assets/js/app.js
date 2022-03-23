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



  // Background navbar

  window.onscroll = () => {
    var scrolling= window.scrollY;
    if(scrolling != 0){
      document.getElementsByClassName('navBarTop')[0].classList.add('backgroundBlackBlur')
    }else{
      document.getElementsByClassName('navBarTop')[0].classList.remove('backgroundBlackBlur')
    }
  }

document.getElementById('sendBtnDesktop').addEventListener('click',function(){
  window.alert("Bien essayé , mais ça ne marche pas")
})
document.getElementById('sendBtnTabletMobile').addEventListener('click',function(){
  window.alert("Bien essayé , mais ça ne marche pas")
})

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

