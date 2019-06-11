$(function(){
    "use strict";
      // plugIn der tjekker for hvilken animationEnd eller transtionEnd 
      // som browseren bruger
        //var animationend	=	$(window).cssAniEnd('animation');
      //var transitionEnd	=	$(window).cssAniEnd('transtion');
      
      var galleryWrapper  	=   $('.galleryWrapper');
      // gør det samme for alle de galleri er som der er på siden	
      galleryWrapper.each(function(){
              
              var thisGalleryWrapper	=		$(this);
              var gallery      			=   	thisGalleryWrapper.find('.gallery');
              var item						=		gallery.children();
              var numberOfItem 			=   	item.length;
              var itemWidth   			=   	parseFloat((100/numberOfItem).toFixed(2));
              var ulWidthe    			=   	numberOfItem*100;
              // buttons
              var direction			  	=   	thisGalleryWrapper.find('.direction');
              var firstButton 			=		direction.find('>:first-child');
              var lastButton 			=		direction.find('>:last-child');
              var liProcent				=		itemWidth+"%";
          
              // Giv li elementerne en bredde i procent ift. hvor mange der er
              item.width(itemWidth+"%");
              console.log(itemWidth+"%")
              // Giv ul elementet en bredde som svarre til 
              // bredden af li elementer * antal af li'er
              gallery.width(ulWidthe+"%");
  
  /*	    
              // Vi definere en css keyframe som flytter vores galleri 
              // til venstre, når den bliver aktiveret af klassen .left
              $.keyframe.define([{
                      name: 'left',
                      '0%': {'transform': 'translate3d(0,0,0px)'},
                      '100%': {'transform': 'translate3d(-'+liProcent+'%,0,0px)'}
              }]);
              // Vi definere en css keyframe som flytter vores galleri 
              // til højre når den bliver aktiveret af klassen .right
              $.keyframe.define([{
                      name: 'right',
                      '0%': {'transform': 'translate3d(-'+liProcent+'%,0,0px)'},
                      '100%': {'transform': 'translate3d(0,0,0px)'}
              }]);  
  */	   
              // varibale der holder styr på om animationen er slut
              var isAnimating    =   false;
              // animere til venstre
              firstButton.on('click',function(e){
                      e.preventDefault();
                      if(isAnimating  === false){
                          isAnimating =   true;
                          gallery.addClass('left').one('animationend',function(){
                              // but om på billedernes rækkefølge af billeder
                              // det første kommer bag det sidste billede
                                      var firstLi =   gallery.find('>:first-child');
                                      firstLi.appendTo(gallery);
                                      gallery.removeClass('left');
                                      isAnimating =   false;
                              });
                      }
              });
              // animere til højre
              lastButton.on('click',function(e){
                      e.preventDefault();
                      if(isAnimating  === false){
                              isAnimating =   true;
                              //	find det sidste billede
                              var lastLi =   gallery.find('>:last-child');
                              // but om på billedernes rækkefølge af billeder
                              // det sidste billde kommer bag det første billede
                              lastLi.prependTo(gallery);
  
                              gallery.addClass('right').one('animationend',function(){
                                      gallery.removeClass('right')
                                      isAnimating =   false;
                              });
                      }
              });
      })
  });