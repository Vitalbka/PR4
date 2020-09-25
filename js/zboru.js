	
        $('.d2018').hide();
        $('.d2017').hide();
        $('.d2016').hide();

$("#ID2019").click(function() {
e = $(this).closest('.content').find('.d2019');
    if(!e.is(':visible')) {   
        $('.d2019').hide();
        $('.d2018').hide();
        $('.d2017').hide();
        $('.d2016').hide();

	
    e.show();
}
});

$("#ID2018").click(function() {
e = $(this).closest('.content').find('.d2018');
    if(!e.is(':visible')) {   
        $('.d2019').hide();

        $('.d2017').hide();
        $('.d2016').hide();

	
    e.show();
}
});
$("#ID2017").click(function() {
e = $(this).closest('.content').find('.d2017');
    if(!e.is(':visible')) {   
        $('.d2019').hide();

        $('.d2018').hide();
        $('.d2016').hide();

	
    e.show();
}
});
$("#ID2016").click(function() {
e = $(this).closest('.content').find('.d2016');
    if(!e.is(':visible')) {   
        $('.d2019').hide();

        $('.d2017').hide();
        $('.d2018').hide();

	
    e.show();
}
});