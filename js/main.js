function dropdown() {
    $('.items').hover(function () { 
        var item = $(this);
        var drop = item.find($('.drop'));
        drop.addClass('active');
        item.next().find('.drop').removeClass('active');
        item.prev().find('.drop').removeClass('active');

    }); 

}

function dropup(){

    var item = $(this);
    item.click().toggleClass('active');
}

function reset() {

    $(document).click(function () {

        $('.drop').removeClass('active');
    })
}



function init() {

    dropdown();
    dropup();
    reset();

}

$(document).ready(init);