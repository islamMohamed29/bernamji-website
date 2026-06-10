 //  const $loader = $(".loader");
 $('#ensign-nivoslider').nivoSlider({
   effect: 'sliceDown',
   slices: 15,
   boxCols: 8,
   boxRows: 4,
   animSpeed: 500,
   pauseTime: 10000,
   startSlide: 0,
   directionNav: true,
   // controlNavThumbs: true,
   controlNavThumbs: false,
   controlNav: true,
   pauseOnHover: false,
   manualAdvance: true,
   afterLoad: function () {
     $('.nivo-control').each(function () {
       const $btn = $('<button type="button" class="nivo-control"></button>');
       $(this).replaceWith($btn);
     });
   }

 });

 $('.nivo-main-image').attr('alt', "Test");

 let $loader = $(".loader");
 if ($loader.length) {
   $loader.addClass("loader-hidden");
   $loader.on("transitionend", function () {
     $loader.remove();
   });
 }
 AOS.init({
   duration: 700,
   //  easing: "ease-in-out",
   once: true,
   offset: 20,
   easing: "ease-out-cubic",
 });
 // =============================================
 // 4. Owl Carousel
 // =============================================
 const vendrosSwiper = new Swiper(".vendors-swiper", {
   loop: false,
   slidesPerView: 5,
   spaceBetween: 0,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: false,

   // ✅ Responsive Breakpoints
   breakpoints: {
     // موبايل صغير - شاشة < 480px
     0: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     // موبايل - شاشة > 480px
     480: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     // تابلت - شاشة > 768px
     768: {
       slidesPerView: 3,
       spaceBetween: 15,
     },
     // لاب توب - شاشة > 1024px
     1024: {
       slidesPerView: 4,
       spaceBetween: 0,
     },
     // Desktop كبير - شاشة > 1280px
     1280: {
       slidesPerView: 5,
       spaceBetween: 0,
     },
   },
 });
 const clientsSwiper = new Swiper(".clients-swiper", {
   loop: false,
   slidesPerView: 1,
   spaceBetween: 20,
   //  setWrapperSize: true,
   autoHeight: false,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: false,
  
 });

 const techSwiper = new Swiper(".techSwiper", {
   loop: false,
   spaceBetween: 25,

   slidesPerView: 3,

   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints: {
     0: {
       slidesPerView: 1
     },
     768: {
       slidesPerView: 2
     },
     992: {
       slidesPerView: 3
     }
   }

 });
 const navbar = document.querySelector(".navbar.home");
 if (navbar) {
   const sections = document.querySelectorAll("section[data-nav]");

   window.addEventListener("scroll", () => {


     if (window.scrollY === 0) {
       navbar.classList.remove("nav-light", "nav-dark");
       navbar.classList.add("nav-transparent");
       navbar.classList.remove("scrolled");
       return;
     } else {
       navbar.classList.add("scrolled");
     }


     navbar.classList.remove("nav-transparent", "nav-dark");
     navbar.classList.add("nav-light");


     sections.forEach((section) => {
       const rect = section.getBoundingClientRect();

       if (
         rect.top <= navbar.offsetHeight &&
         rect.bottom > navbar.offsetHeight
       ) {
         navbar.classList.remove(
           "nav-transparent",
           "nav-light",
           "nav-dark"
         );

         navbar.classList.add(`nav-${section.dataset.nav}`);
       }
     });
   });

 }


 window.scrollToTop = function () {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 };
 const scrollEl = document.getElementById('scroll-demo');
 const circumference = 2 * Math.PI * 20;
 const pieFill = document.getElementById('pie-fill');
 const pieInner = document.getElementById('pie-inner');
 const pieArrow = document.getElementById('pie-arrow');
 let done100 = false;

 pieFill.style.strokeDasharray = circumference;
 pieFill.style.strokeDashoffset = circumference;

 function updatePie() {
   const page = document.getElementById('demo-page');
   const max = document.documentElement.scrollHeight - window.innerHeight;
   const pct = Math.round((window.scrollY / max) * 100);
   const offset = circumference - (pct / 100) * circumference;
   pieFill.style.strokeDashoffset = offset;

   if (pct >= 100 && !done100) {
     done100 = true;
     pieInner.style.display = 'none';
     pieArrow.style.display = 'flex';
   } else if (pct < 100 && done100) {
     done100 = false;
     pieInner.style.display = 'flex';
     pieArrow.style.display = 'none';
   }
   if (!done100) pieInner.textContent = pct + '%';
 }

 scrollEl.addEventListener('scroll', updatePie);
 window.addEventListener('scroll', updatePie);
 updatePie();


 //  Mobile Menu 
 const $menuToggle = $("#menuToggle");
 const $mobileMenu = $("#mobileMenu");
 const $menuOverlay = $("#menuOverlay");
 const $closeMenu = $("#closeMenu");

 const $content = $(".content");
 const $searchToggle = $("#searchToggle");
 const $searchBox = $("#searchBox");

 function openMenu() {
   $menuToggle.addClass("active");
   $mobileMenu.addClass("active");
   $menuOverlay.addClass("active");
   $content.addClass("dimmed");
 }

 function closeMenu() {
   $menuToggle.removeClass("active");
   $mobileMenu.removeClass("active");
   $menuOverlay.removeClass("active");
   $content.removeClass("dimmed");
   $searchBox.removeClass("active");
 }

 $searchToggle.on("click", function (e) {
   e.preventDefault();
   // $searchBox.toggleClass("active").focus();
 });
 // Start Search
 $("#searchForm").on("submit", function (e) {
   e.preventDefault();
 });

 function searchFromResponsiveMenu() {
   const keyword = $("#searchBox").val();
   const encodedKeyword = encodeURIComponent(keyword);
   window.location.href =
     window.location.origin +
     "/" +
     BER.shortLanguageCode +
     "/search?keyword=" +
     encodedKeyword;
 }

 $("#searchToggle").on("click", searchFromResponsiveMenu);

 $("#searchBox").on("keypress", function (e) {
   if (e.which === 13) {
     searchFromResponsiveMenu();
   }
 });
 // End Searh

 $(".menu-dropdown-toggle").on("click", function (e) {
   e.preventDefault();
   const $this = $(this);
   const $dropdownMenu = $this.siblings(".new-dropdown-menu");

   $this.toggleClass("active");
   $dropdownMenu.toggleClass("active");

   if ($dropdownMenu.hasClass("active")) {
     setTimeout(function () {
       const dropdownBottom =
         $dropdownMenu.offset().top + $dropdownMenu.outerHeight();
       const menuBottom = $mobileMenu.offset().top + $mobileMenu.height();

       if (dropdownBottom > menuBottom) {
         $mobileMenu.animate({
             scrollTop: $mobileMenu.scrollTop() + (dropdownBottom - menuBottom) + 20,
           },
           300
         );
       }
     }, 300);
   }
 });

 $menuToggle.on("click", function () {
   if ($mobileMenu.hasClass("active")) {
     closeMenu();
   } else {
     openMenu();
   }
 });

 $closeMenu.on("click", function () {
   closeMenu();
 });

 $menuOverlay.on("click", function () {
   closeMenu();
 });

 $(document).on("keydown", function (e) {
   if (e.key === "Escape") {
     if ($(".new-dropdown-menu.active").length) {
       $(".menu-dropdown-toggle.active").removeClass("active");
       $(".new-dropdown-menu.active").removeClass("active");
     } else if ($mobileMenu.hasClass("active")) {
       closeMenu();
     }
   }
 }); // Google Translate
 var googleLoaded = false;
 $('.translator a[data-toggle="dropdown"]').on('click', function (pv) {
   pv.preventDefault();
   if (!googleLoaded)
     $('<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>').appendTo('head');
   googleLoaded = true;
 });
 window.googleTranslateElementInit = function () {
   new google.translate.TranslateElement({
     pageLanguage: "EN",
     // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
     multilanguagePage: false,
     gaTrack: false
   }, 'google_translate_element');
 };
 $('#google_translate_element').on('click', function (e) {
   e.stopPropagation();
 });
 window.openLanguageModal = function () {
   if (!googleLoaded)
     $(
       '<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>'
     ).appendTo("head");
   googleLoaded = true;
   $("#languageOverlay").css("display", "flex");
 };

 window.closeLanguageModal = function () {
   $("#languageOverlay").css("display", "none");
 };

 window.changeLanguage = function (lang) {
   $("#languageSelect a").removeClass("active");
   if (lang === "ar") {
     $("#arabicBtn").addClass("active");
   } else {
     $("#englishBtn").addClass("active");
   }
 };

 $(window).on("resize", function () {
   if (window.innerWidth > 1024 && $mobileMenu.hasClass("active")) {
     closeMenu();
   }
 });