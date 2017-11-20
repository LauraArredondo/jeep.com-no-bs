//to hide my menu, we use headroom to identify the header
(function(){

var header = document.getElemetById('header');
  //to access with javaScript to the element with header id
var headroom = new Headroom(header);
headroom.init();  /*to initial library*/

//Menu Responsive
//we calculate the width of the page
var width = $ (window).width(),
  links = $('#links'),
  btnMenu = $('#btn-menu'),
  icon = $ ('#btn-menu .icon');

  if(width < 700){
    links.hide();
    icon.addClass('fa-bars');
  }

//close and open icon
  btnMenu.on('click', function(e){
        links.slideToggle ();
        icon.toggleClass('menu3');
        icon.toggleClass('menu3-times');
  });

 //make change if the size change
  $(window).on('resize', function(){
    if ($(this).width()>700){
      links.show();
      icon.addClass('menu3-times');
      icon.removeClass('menu3');
    } else{
      links.hide();
      icon.addClass('menu3');
      icon.removeClass('menu3-times');
    }
  });

});
