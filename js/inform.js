 
        $('.rada').hide();
        $('.department').hide();
      

$("#IdHistory").click(function() {
e = $(this).closest('.content').find('.strategy');
    if(!e.is(':visible')) {   
    $('.strategy').hide();
	$('.rada').hide();
	$('.department').hide();
	
    e.show();
}
});

$("#IdStrategy").click(function() {
e = $(this).closest('.content').find('.rada');
    if(!e.is(':visible')) {
    
  
     $('.strategy').hide();
    $('.department').hide();
   
    e.show();
}
});
$("#IdObservers").click(function() {
e = $(this).closest('.content').find('.department');
    if(!e.is(':visible')) {
   
    
    $('.strategy').hide();
    $('.rada').hide();

    e.show();
}
});