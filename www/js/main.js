$('#menu_mobil_text').click(function () {
    $('#menu_mobil_item').css({
        'display':'block'
    });
});
$('#close').click(function (e) {
    e.stopPropagation();
    $('#menu_mobil_item').css({
        'display':'none'
    });
});

