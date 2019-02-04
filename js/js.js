
$(document).ready(function() {




// ********** slowSkroll ************

  $("a.scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1500,
       easing: "swing"
    });
    return false;
 });





});
