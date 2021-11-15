$(document).ready(function () {
  // $(".toggle").click(function () {
  //   $(".navbar-top .en").toggleClass("show");
  // });

  // $(".nav_toggle .icon").click(function () {
  //   $(".navbar .main_menu .super_menu").toggleClass("show");
  // });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
      $("header .navbar").addClass("fixed");
      $(".scroll_top").show();
    } else {
      $("header .navbar").removeClass("fixed");
      $(".scroll_top").hide();
    }
  });

  setTimeout(() => {
    let counter1 = $(".timer1").text()
    let counter2 = $(".timer1").text();
    let counter3 = $(".timer2").text();
    let counter4 = $(".timer3").text();

    window.onscroll = function () {
      $(".timer").countTo({
        form: 0,
        to: counter1,
        speed: 2000,
        refreshInterval: 10,
      });
      $(".timer1").countTo({
        form: 0,
        to: counter2,
        speed: 2000,
        refreshInterval: 10,
      });
      $(".timer2").countTo({
        form: 0,
        to: counter3,
        speed: 2000,
        refreshInterval: 10,
      });
      $(".timer3").countTo({
        form: 0,
        to: counter4,
        speed: 2000,
        refreshInterval: 10,
      });
    };
  }, 1000);

});

function scrollToTop() {
  $(window).scrollTop(0);
}

// let x=document.getElementById("super_menu")
// let scrolling=document.getElementById("scroll")


// let stop = setInterval(function(){
//     if(window.innerWidth>991 && x.classList.contains("show")){
//             x.classList.remove("show")
//     }
// })

// if(window.innerWidth>991){
//     clearInterval(stop);
// }
