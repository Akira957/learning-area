function drawLine($divp, $divc, $line) {

    var x1 = $divp.offset().left + ($divp.outerWidth() / 2);
    var y1 = $divp.offset().top + ($divp.outerHeight());
    var x2 = $divc.offset().left + ($divc.outerWidth() / 2);
    var y2 = $divc.offset().top;

    $line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);
}

function drawLines() {

    $(".data").each(function (i, divc) {
        let $divc = $(divc);
        let $line = $divc.siblings("svg").children();
        let $divp = $divc.parent().parent().parent().siblings(".data");

        if ($divp.length !== 0) {
            drawLine($divp, $divc, $line);
        }
    });
}

$(function () {

    let $divp = $(".data");

    drawLines($divp);
});