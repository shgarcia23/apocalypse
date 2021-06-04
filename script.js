$(".yes").click(function() {
    $(".op1").show();
    $(".start").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".next1 ").show();
});

$(".no").click(function() {
    $(".op2").show();
});
$(".next1").click(function() {
    $(".d1").show();
    $(".op1").hide();
    $(".next1").hide();
    $(".y2").show();
    $(".n2").show();
});
$(".y2").click(function() {
    $(".outcome11").toggle();
    $(".next2").show();
    $(".y2").hide();
    $(".d1").hide();
    $(".n2").hide();
});
$(".n2").click(function() {
    $(".outcome21").toggle();

    $(".y2").hide();
    $(".d1").hide();
    $(".n2").hide();
});
$(".next2").click(function() {
    $(".d2").toggle();
    $(".next2").hide();
    $(".outcome11").hide();
    $(".y3").show();
    $(".n3").show();

});
$(".y3").click(function() {
    $(".outcome12").show();
    $(".y3").hide();
    $(".n3").hide();
    $(".d2").hide();
    $(".next3").show();
});
$(".n3").click(function() {
    $(".outcome22").show();
    $(".y3").hide();
    $(".n3").hide();
    $(".d2").hide();
});
$(".next3").click(function() {
    $(".d3").show();
    $(".y4").show();
    $(".n4").show();
    $(".next3").hide();

});