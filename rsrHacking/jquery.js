let $line = $("#line");

let $divp = $(".data");

let $divc = $(".data-left");

function drawLine($divp, $divc, $line) {

    var x1 = $divp.offset().left + ($divp.outerWidth() / 2);
    var y1 = $divp.offset().top + ($divp.outerHeight());
    var x2 = $divc.offset().left + ($divc.outerWidth() / 2);
    var y2 = $divc.offset().top;

    $line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);

    console.log("Hello World");
}



$(function () {
    let $line = $("#line");

    let $divp = $(".data");

    let $divc = $(".data-left");

    drawLine($divp, $divc, $line);
});
