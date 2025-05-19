
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// JS for fancybox Slide & button

function fancybox() {
  $('[data-fancybox]').fancybox({
      protect: true,
      buttons: [
          "fullScreen",
          "thumbs",
          "share",
          "slideShow",
          "close"
      ],
      image: {
          preload: false
      },
  });
}
fancybox();

// Partner Slider
$('.d2c_testimonial_slider').slick({
centerMode: true,
centerPadding: '0px',
dots: false,
arrows: true,
infinite: true,
autoplay:true,
speed: 1000,
slidesToShow: 3,
slidesToScroll: 1,
pauseOnHover:false,
responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 3,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 2,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
    }
]
});

// Form Validation Js
(function(){ emailjs.init("izPMWdBfrTL23L46R"); })();

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault();

            emailjs.sendForm("service_mk82tgh", "template_3q97p0g", this)
            .then(function(response) {
              alert("Email sent successfully!");
              form.reset();
            }, function(error) {
              alert("FAILED to send email. Error: " + JSON.stringify(error));
            });
          }
          // form.classList.add('was-validated')
        }, false)
    })
})();


// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});
// WOW JS
  wow = new WOW(
    {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       false,
    live:         true
  }
  )
  wow.init();

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

// Counter
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

// Load More and Explore More Button JS
function updateSliceShow() {
    var windowWidth = $(window).width();
    var $defaultShow, $sliceShow;
  
    if (windowWidth < 768) {
      $defaultShow = 7;
      $sliceShow = 1;
    } else if (windowWidth < 992) {
      $defaultShow = 7;
      $sliceShow = 2;
    } else if (windowWidth < 1200) {
      $defaultShow = 7;
      $sliceShow = 3;
    } else {
      $defaultShow = 7;
      $sliceShow = 3;
    }
  
    return [$sliceShow, $defaultShow];
  }
  
  function load_more($sectionName = "", $locationCol, $btnParentClass ,$btnId, $defaultShow = 6, $sliceShow = 3) {
    $($locationCol).css("display", "none");
    $($sectionName + " " + $btnParentClass).css("display", "none");
  
    $($locationCol).slice(0, $defaultShow).fadeIn();
    if ($($locationCol + ":hidden").length != 0) {
      $($sectionName + " " + $btnParentClass).css("display", "flex");
  
      $($btnId).off("click").on("click", function (e) {
        e.preventDefault();
  
        $($locationCol + ":hidden").slice(0, $sliceShow).slideDown(500);
        if ($($locationCol + ":hidden").length == 0) {
          $($sectionName + " " + $btnParentClass).css("display", "none");
        }
      });
    }
  }
  
  $(document).ready(function () {
    var sliceDefault, sliceShow;
  
    [sliceShow, sliceDefault] = updateSliceShow();
  
    $(window).on("resize", function () {
      [sliceShow, sliceDefault] = updateSliceShow();
  
      load_more(".d2c_services_wrapper", ".service", ".d2c_service_btn" ,"#d2c_service_more", sliceDefault, sliceShow);
      load_more(".d2c_blog_wrapper", ".blog", ".d2c_blog_btn" ,"#d2c_blog_more", sliceDefault, sliceShow);
    });
  
    load_more(".d2c_services_wrapper", ".service", ".d2c_service_btn" ,"#d2c_service_more", sliceDefault, sliceShow);
    load_more(".d2c_blog_wrapper", ".blog", ".d2c_blog_btn" ,"#d2c_blog_more", sliceDefault, sliceShow);
  });
