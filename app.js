$(document).ready(function() {

    $('.quarterback').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#qb').toggle("slow");

    });
    $('.defensive-end').click(function() {
//      $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#qb').hide();
        $('#de').toggle("slow");

    });
    $('.linebacker').click(function() {
//       $('.lbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#qb').hide();
        $('#lb').toggle("slow");

    });
    $('.cornerback').click(function() {
//        $('.cbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#de').hide();
        $('#qb').hide();
        $('#cb').toggle("slow");
    });
    $('.oline').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#qb').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#ol').toggle("slow");

    });
    $('.dline').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#qb').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#dl').toggle("slow");

    });
    $('.freesafety').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#qb').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#fs').toggle("slow");

    });
    $('.strongsafety').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#fs').hide();
        $('#qb').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#ss').toggle("slow");

    });

    $('.tightend').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#qb').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#te').toggle("slow");

    });
    $('.fullback').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#qb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#fb').toggle("slow");

    });
    $('.halfback').click(function() {
//        $('.qbItem').toggle("fast");
        $('#wr').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#qb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#hb').toggle("slow");

    });
    $('.widereciever').click(function() {
//        $('.qbItem').toggle("fast");
        $('#qb').hide();
        $('#ol').hide();
        $('#lb').hide();
        $('#dl').hide();
        $('#ss').hide();
        $('#fs').hide();
        $('#hb').hide();
        $('#fb').hide();
        $('#te').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#wr').toggle("slow");

    });

    $('#qb').hide();
    $('#cb').hide();
    $('#de').hide();
    $('#lb').hide();
    $('#wr').hide();
    $('#te').hide();
    $('#fb').hide();
    $('#hb').hide();
    $('#fs').hide();
    $('#ss').hide();
    $('#ol').hide();
    $('#dl').hide();

});
