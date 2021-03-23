function dropdown() {

    $('.items').hover(function () {
        $('.drop').slideDown();

    })

    


}

function reset() {

    $('body').click(function () {

        $('.drop').slideUp();
    })
}



function init() {

    dropdown()
    reset();

}

$(document).ready(init);