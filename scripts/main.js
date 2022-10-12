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
                    $('.page-header').addClass('scroll-top');
                }
                else {
                    $('.page-header').removeClass('scroll-top');
                }                 
            });

        }

        var getheight = function(){

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
        }

        var getslider = function(){
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

        var semanticUI = function(){
            $('.ui.dropdown')
              .dropdown()
            ;
            new WOW().init();
            $('.ui.checkbox').checkbox();
        }
        var fancybox = function(){
            // $("#md-tk").fancybox().trigger('click');
        }


        return{
            gettoggle:gettoggle,
            scrolltoTop:scrolltoTop,
            getheight:getheight,
            getslider:getslider,
            semanticUI:semanticUI,
            fancybox:fancybox,

        };

    }(); 

  //--End All site


    
   
});    
    
