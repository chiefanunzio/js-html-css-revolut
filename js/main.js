function dropdown() {
    $('.items').hover(function () { //proviamo ad aggiungere this per selez uno solo 
        var item = $(this);
        var drop = item.find($('.drop'));
        drop.addClass('active');
        item.next().find($('.drop')).removeClass('active');
        item.prev().find($('.drop')).removeClass('active');

    }); // forse un po meglio ma nn mi convince

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