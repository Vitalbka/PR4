 
        $('.zboru').hide();
        $('.duvidend').hide();
        $('.rozkruttia').hide();
        $('.cinni').hide();
      
      

$("#IdVnutr").click(function() {
e = $(this).closest('.content').find('.vnutr');
    if(!e.is(':visible')) {   
        $('.zboru').hide();
        $('.duvidend').hide();
        $('.rozkruttia').hide();
        $('.cinni').hide();
        $('.vnutr').hide();
	
    e.show();
}
});

$("#IdZboru").click(function() {
e = $(this).closest('.content').find('.zboru');
    if(!e.is(':visible')) {
    $('.duvidend').hide();
    $('.rozkruttia').hide();
    $('.cinni').hide();
    $('.vnutr').hide();
   
    e.show();
}
});
$("#IdDuvidend").click(function() {
e = $(this).closest('.content').find('.duvidend');
    if(!e.is(':visible')) {
    $('.zboru').hide();
    $('.rozkruttia').hide();
    $('.cinni').hide();
    $('.vnutr').hide();
   
    e.show();
}
});

$("#IdRozkruttia").click(function() {
e = $(this).closest('.content').find('.rozkruttia');
    if(!e.is(':visible')) {
    $('.duvidend').hide();
    $('.zboru').hide();
    $('.cinni').hide();
    $('.vnutr').hide();
   
    e.show();
}
});

$("#IdCinni").click(function() {
e = $(this).closest('.content').find('.cinni');
    if(!e.is(':visible')) {
    $('.duvidend').hide();
    $('.rozkruttia').hide();
    $('.zboru').hide();
    $('.vnutr').hide();
   
    e.show();
}
});