$(document).ready(function() {
    $('.quarterback').click(function() {
        $('.child-menu1').toggle("fast");
    });
    $('.defensive-end').click(function() {
        $('.child-menu2').toggle("fast");
    });
    $('.linebacker').click(function() {
        $('.child-menu3').toggle("fast");
    });
    $('.cornerback').click(function() {
        $('.child-menu4').toggle("fast");
    });
});
$('.qb').click(function() {
    $('.child-menu1').show("fast");
});