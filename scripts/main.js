jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.gettoggle();
      App.Site.scrolltoTop();
      App.Site.getheight();
      App.Site.getslider();
      App.Site.semanticUI();
      App.Site.fancybox();
      App.Site.nav_tabs();
  });

  //--All site
    App.Site = function(){

        var gettoggle = function(){
            $(".page-header .toggle-menu").click(function(){
                $(".page-header .main-menu").addClass("active");
            });
            $(".page-header .md-button").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
            $(".page-header .main-menu ul li a").click(function(){
                $(".page-header .main-menu").removeClass("active");
            });
        }

        var scrolltoTop = function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 60) {
                    $('.page-header .top-header').addClass('scroll-top');
                }
                else {
                    $('.page-header .top-header').removeClass('scroll-top');
                }                 
            });

        }

        var getheight = function(){
            $('.page-main .section-2 .md-content .md-row .md-col-3').height(h3height); 
            var h3height = 0;
                $('.page-main .section-2 .md-content .md-row .md-col-3').each(function() {
                    if(h3height < $(this).height()){
                      h3height = $(this).height();
                    };
                });
            $('.page-main .section-2 .md-content .md-row .md-col-3').height(h3height); 
            var onresize = function() {
               $('.page-main .section-2 .md-content .md-row .md-col-3').css("height","auto");
                       var h3height = 0;
                       $('.page-main .section-2 .md-content .md-row .md-col-3').each(function() {
                           if(h3height < $(this).height()){
                             h3height = $(this).height();
                           };
                       });
                       $('.page-main .section-2 .md-content .md-row .md-col-3').height(h3height);
               };
            window.addEventListener("resize", onresize);

            $('.page-program .section-2 .md-row .main-content').css("height","auto");
            var h3height = 0;
                $('.page-program .section-2 .md-row .main-content').each(function() {
                    if(h3height < $(this).height()){
                      h3height = $(this).height();
                    };
                });
            $('.page-program .section-2 .md-row .main-content').height(h3height); 
            var onresize = function() {
               $('.page-program .section-2 .md-row .main-content').css("height","auto");
                       var h3height = 0;
                       $('.page-program .section-2 .md-row .main-content').each(function() {
                           if(h3height < $(this).height()){
                             h3height = $(this).height();
                           };
                       });
                       $('.page-program .section-2 .md-row .main-content').height(h3height);
               };
            window.addEventListener("resize", onresize);
            $('.page-program .section-2 .md-row-1 .main-content').css("height","auto");
            var h3height = 0;
                $('.page-program .section-2 .md-row-1 .main-content').each(function() {
                    if(h3height < $(this).height()){
                      h3height = $(this).height();
                    };
                });
            $('.page-program .section-2 .md-row-1 .main-content').height(h3height); 
            var onresize = function() {
               $('.page-program .section-2 .md-row-1 .main-content').css("height","auto");
                       var h3height = 0;
                       $('.page-program .section-2 .md-row-1 .main-content').each(function() {
                           if(h3height < $(this).height()){
                             h3height = $(this).height();
                           };
                       });
                       $('.page-program .section-2 .md-row-1 .main-content').height(h3height);
               };
            window.addEventListener("resize", onresize);
             var height_left = $('.page-about .section-1 .md-content-3 .content .right-content').outerHeight();
              $('.page-about .section-1 .md-content-3 .content .left-content').css("height",height_left);
            var onresize = function() {
              var height_left = $('.page-about .section-1 .md-content-3 .content .right-content').outerHeight();
              $('.page-about .section-1 .md-content-3 .content .left-content').css("height",height_left);
            };
            window.addEventListener("resize", onresize);
        }

        var getslider = function(){
            $('.section-4 .owl-carousel').owlCarousel({
                loop:true,
                margin:15,
                nav:true,
                responsive:{
                    0:{
                        items:1.5
                    },
                    600:{
                        items:2.5
                    },
                    1000:{
                        items: 3.5
                    }
                }
            });
            $('.section-3 .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dot:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
            $('.page-program .section-2 .owl-carousel').owlCarousel({
                loop:true,
                stagePadding: 30,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        }

        var semanticUI = function(){
            $('.ui.dropdown')
              .dropdown()
            ;
            new WOW().init();
            $('.ui.checkbox').checkbox();
        }
        var fancybox = function(){

            // $("#modal-sucess").fancybox().trigger('click');
            // $("#modal-sucess-1").fancybox().trigger('click');
            // $("#modal-sucess-2").fancybox().trigger('click');
            // $("#modal-sucess-3").fancybox().trigger('click');
            // $("#modal-sucess-4").fancybox().trigger('click');
            $(".the-le").fancybox({});
        }

        var nav_tabs = function(){
            function bootstrapTabControl(){
              var i, items = $('.nav-link'), pane = $('.tab-pane');
              // next
              $('.nexttab').on('click', function(){
                  for(i = 0; i < items.length; i++){
                      if($(items[i]).hasClass('active') == true){
                          break;
                      }
                  }
                  if(i < items.length - 1){
                      // for tab
                      $(items[i]).removeClass('active');
                      $(items[i+1]).addClass('active');
                      // for pane
                      $(pane[i]).removeClass('show active');
                      $(pane[i+1]).addClass('show active');
                  }

              });
            }
            bootstrapTabControl();
        }


        return{
            gettoggle:gettoggle,
            scrolltoTop:scrolltoTop,
            getheight:getheight,
            getslider:getslider,
            semanticUI:semanticUI,
            fancybox:fancybox,
            nav_tabs:nav_tabs,
        };

    }(); 

  //--End All site


    
   
});    
    

    document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  