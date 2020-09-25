window.onload = function() {
   if (window.location.href.indexOf("strategy") > -1) {
        $('.history').hide();
        $('.rada').hide();
        $('.department').hide();
        $('.kodex').hide();
        $('.strategy').show();
    }
    else if (window.location.href.indexOf("rada") > -1) {
        $('.history').hide();
        $('.department').hide();
        $('.kodex').hide();
        $('.strategy').hide();
        $('.rada').show();
    }
    else if (window.location.href.indexOf("department") > -1) {
        $('.history').hide();
        $('.kodex').hide();
        $('.strategy').hide();
        $('.rada').hide();
        $('.department').show();
    }
    /*else if (window.location.href.indexOf("kodex") > -1) {
        $('.history').hide();
        $('.strategy').hide();
        $('.rada').hide();
        $('.department').hide();
        $('.kodex').show();
    }*/
    else{
        $('.strategy').hide();
        $('.rada').hide();
        $('.department').hide();
        $('.kodex').hide();
    }
};

$("#IdHistory").click(function() {
e = $(this).closest('.content').find('.history');
    if(!e.is(':visible')) {   
    $('.strategy').hide();
	$('.rada').hide();
	$('.department').hide();
	$('.kodex').hide();
    e.show();
}
});

$("#IdStrategy").click(function() {
e = $(this).closest('.content').find('.strategy');
    if(!e.is(':visible')) {
    
    $('.history').hide();
    $('.rada').hide();
    $('.department').hide();
    $('.kodex').hide();
    e.show();
}
});
$("#IdObservers").click(function() {
e = $(this).closest('.content').find('.rada');
    if(!e.is(':visible')) {
   
    $('.history').hide();
    $('.strategy').hide();
    $('.department').hide();
   $('.kodex').hide();
    e.show();
}
});
$("#IdDepartment").click(function() {
e = $(this).closest('.content').find('.department');
    if(!e.is(':visible')) {
    
    $('.rada').hide();
    $('.history').hide();
    $('.strategy').hide();
    $('.kodex').hide();
   
    e.show();
}
});
$("#IdKodex").click(function() {
e = $(this).closest('.content').find('.kodex');
    if(!e.is(':visible')) {
    
    $('.department').hide();
    $('.rada').hide();
    $('.history').hide();
    $('.strategy').hide();

    e.show();
}
});
