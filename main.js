 gsap.registerPlugin();

 const $loader = $(".loader");
 const $app = $(".wrapper");


 gsap.set(".navbar", {
     opacity: 0,
     y: -40
 });
 gsap.set(".navbar-brand img", {
     scale: 0,
     rotation: -15,
     opacity: 0
 });
 gsap.set(".nav-item", {
     opacity: 0,
     y: -12
 });
 gsap.set(".btn-support", {
     opacity: 0,
     scale: 0.8
 });
 gsap.set(".hero-content h1 .line > span", {
     y: "110%",
     opacity: 0
 });
 gsap.set(".hero-content p", {
     opacity: 0,
     y: 20
 });
 gsap.set(".hero-content .btn-main, .hero-content .btn-outline-main", {
     opacity: 0,
     y: 16,
 });

 // =============================================
 // 2. دالة الانميشن الرئيسية
 // =============================================
 function initAnimations() {
     const tl = gsap.timeline({
         defaults: {
             ease: "power3.out"
         },
     });

     tl
         // Navbar bar نفسها
         .to(".navbar", {
             opacity: 1,
             y: 0,
             duration: 0.6,
         })

         // اللوجو
         .to(
             ".navbar-brand img", {
                 scale: 1,
                 rotation: 0,
                 opacity: 1,
                 duration: 0.5,
                 ease: "back.out(1.7)",
             },
             "-=0.4"
         )

         // Nav items
         .to(
             ".nav-item", {
                 opacity: 1,
                 y: 0,
                 stagger: 0.06,
                 duration: 0.4,
             },
             "-=0.35"
         )

         // زرار Support
         .to(
             ".btn-support", {
                 opacity: 1,
                 scale: 1,
                 duration: 0.4,
                 ease: "back.out(1.5)",
             },
             "-=0.3"
         )

         // سطور العنوان (كل سطر يطلع من تحت)
         .to(
             ".hero-content h1 .line > span", {
                 y: "0%",
                 opacity: 1,
                 stagger: 0.1,
                 duration: 0.7,
                 ease: "power3.out",
             },
             "-=0.5"
         )

         // الـ paragraph
         .to(
             ".hero-content p", {
                 opacity: 1,
                 y: 0,
                 duration: 0.5,
             },
             "-=0.4"
         )

         // الأزرار
         .to(
             ".hero-content .btn-main, .hero-content .btn-outline-main", {
                 opacity: 1,
                 y: 0,
                 stagger: 0.07,
                 duration: 0.4,
                 ease: "back.out(1.3)",
             },
             "-=0.3"
         );
 }

 // =============================================
 // 3. تدفق اللودر
 // =============================================
 if ($loader.length) {
     // إخفاء اللودر بعد تحميل الصفحة
     $(window).on("load", function () {
         $loader.addClass("loader-hidden");
     });

     $loader.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
         $loader.remove();

         // اظهار الـ wrapper + الانميشن يبدأ في نفس اللحظة
         gsap.set($app, {
             visibility: "visible"
         });
         gsap.to($app, {
             opacity: 1,
             duration: 0.3,
             ease: "power2.out"
         });
         initAnimations();
     });
 } else {
     // لو مفيش لودر، اشغّل الانميشن مباشرة
     gsap.set($app, {
         visibility: "visible",
         opacity: 1
     });
     initAnimations();
 }

 // =============================================
 // 4. Owl Carousel
 // =============================================
 $(".hero-owl").owlCarousel({
     loop: false,
     margin: 0,
     nav: true,
     dots: false,
     items: 1,
     autoplay: false,
     //  autoplayTimeout: 4000,
     // 
     //  onChanged: function () {
     //     console.log('hello')
     //      const $active = $(".owl-item.active .hero-content");

     //      // إعادة إخفاء العناصر قبل الانميشن
     //      gsap.set($active.find("h1 .line > span"), {
     //          y: "110%",
     //          opacity: 0
     //      });
     //      gsap.set($active.find("p"), {
     //          opacity: 0,
     //          x: -30
     //      });
     //      gsap.set($active.find(".btn-main, .btn-outline-main"), {
     //          opacity: 0,
     //          y: 15,
     //      });

     //      const tl = gsap.timeline({
     //          defaults: {
     //              ease: "power3.out"
     //          }
     //      });

     //      tl.to($active.find("h1 .line > span"), {
     //              y: "0%",
     //              opacity: 1,
     //              stagger: 0.1,
     //              duration: 0.6,
     //          })
     //          .to(
     //              $active.find("p"), {
     //                  opacity: 1,
     //                  x: 0,
     //                  duration: 0.5,
     //              },
     //              "-=0.3"
     //          )
     //          .to(
     //              $active.find(".btn-main, .btn-outline-main"), {
     //                  opacity: 1,
     //                  y: 0,
     //                  stagger: 0.1,
     //                  duration: 0.4,
     //                  ease: "back.out(1.3)",
     //              },
     //              "-=0.3"
     //          );
     //  },
 });
 const vendrosSwiper = new Swiper(".vendors-swiper", {
     loop: false,
     slidesPerView: 5,
     spaceBetween: 0,
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
     autoplay: false,
 });
 const clientsSwiper = new Swiper(".clients-swiper", {
     loop: false,
     slidesPerView: 2,
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
 //  ...$app. 
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

 //  scrollEl.addEventListener('scroll', updatePie);
 window.addEventListener('scroll', updatePie);
 updatePie();