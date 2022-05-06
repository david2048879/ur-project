const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})




/* Owl Carousel 2 All Settings. See the bottom for how to use equal heights with matchHeight  plugin */

$(document).ready(function() {
 

  $(window).scroll(function(){
    if(this.scrollY > 20){
        $(".nav-bar").addClass("sticky");
    }else{
        $(".nav-bar").removeClass("sticky");
    }
});
  //$(".owl-carousel").owlCarousel();

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    autoPlayTimeOut:500,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1000:{
            items: 3,
        },
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".project-left", {
    duration:3,
    x:-100,
    scrollTrigger:{
      trigger:".project-left",
      toggleActions: "restart pause resume reverse"
    }
  })

  gsap.from(".project-right", {
    duration:3,
    x:100,
    scrollTrigger:{
      trigger:".project-left",
      toggleActions: "restart reverse resume complete"
    }
  })

  gsap.from(".project-center", {
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".project-left",
      toggleActions: "restart reverse resume complete"
    }
  })

 
});
