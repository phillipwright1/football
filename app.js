$(document).ready(function() {

    $('.quarterback').click(function() {
//        $('.qbItem').toggle("fast");
        $('#cb').hide();
        $('#de').hide();
        $('#lb').hide();
        $('#qb').toggle("slow");

    });
    $('.defensive-end').click(function() {
//       $('.deItem').toggle("fast");
        $('#qb').hide();
        $('#cb').hide();
        $('#lb').hide();
        $('#de').toggle("slow");

    });
    $('.linebacker').click(function() {
//       $('.lbItem').toggle("fast");
        $('#qb').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#lb').toggle("slow");

    });
    $('.cornerback').click(function() {
//        $('.cbItem').toggle("fast");
        $('#qb').hide();
        $('#de').hide();
        $('#lb').hide();
        $('#cb').toggle("slow");
    });

    $('#qb').hide();
    $('#cb').hide();
    $('#de').hide();
    $('#lb').hide();


});
