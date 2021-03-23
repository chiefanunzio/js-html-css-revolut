function dropdown() {
    $('.items').hover(function () {//proviamo ad aggiungere this per selez uno solo 
        var item = $(this);
        var drop = item.find($('.drop'));
        var visible = drop.is(':visible');
        drop.addClass('active');
        
    

    });
    
    
    // forse un po meglio ma nn mi convince

}

function reset() {

    $('body').click(function () {

        $('.drop').removeClass('active');
    })
}



function init() {

    dropdown()
    reset();

}

$(document).ready(init);