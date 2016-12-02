
var navToggle = function(clickElement) {
  $("#accordion-mobile h3").click(function(){
    //slide up all the link lists
    $("#accordion-mobile ul ul").slideUp(300);
    //slide down the link list below the h3 clicked - only if its closed  
    if(!$(this).next().is(":visible")) {
      $(this).next().slideDown(300);
    }
  })
}

navToggle('#accordion-mobile h3');

var toggleAppear = function(labelClick) {
  $(labelClick).click(function() {
    $('.nav-main__mobile-close').html('<label for="nav-sidebartoggler"><p style="float: right;cursor:pointer;margin-right: 1em;">Close Main Menu <i class="fa fa-times-circle" aria-hidden="true"></i></p></label>');
  });
}

toggleAppear('#nav-main__mobile_toggle-button');

var sectionArrowToggle = function(clickElement) {
  $(clickElement).on('click', function(event){
    if($(this).next().hasClass('hide')) {
        $(this).next().slideToggle(0,function(){
          $(this).removeClass('hide').slideDown(300);
        });
      $(this).find('.fa-angle-right').css({
            "transform" : "rotate(90deg)",
            "transition-timing-function" : "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "transition-duration" : "0.3s"
        });
    } else {
        $(this).next().slideToggle(300,function(){
          $(this).addClass('hide').removeAttr('style');
        });
      $(this).find('.fa-angle-right').css("transform", "none");
    }
  });
}
sectionArrowToggle('#list h3');
sectionArrowToggle('#list h2');
sectionArrowToggle('#sch-card__data-toggle h3');

/*     transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      transition-duration: 0.7s;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg); */

    $("nav:first").accessibleMegaMenu({
        /* prefix for generated unique id attributes, which are required 
           to indicate aria-owns, aria-controls and aria-labelledby */
        uuidPrefix: "accessible-megamenu",

        /* css class used to define the megamenu styling */
        menuClass: "nav-main",

        /* css class for a top-level navigation item in the megamenu */
        topNavItemClass: "nav-main__item",

        /* css class for a megamenu panel */
        panelClass: "nav-main__sub",

        /* css class for a group of items within a megamenu panel */
        panelGroupClass: "nav-main__sub-group",

        /* css class for the hover state */
        hoverClass: "hover",

        /* css class for the focus state */
        focusClass: "focus",

        /* css class for the open state */
        openClass: "open"
    });