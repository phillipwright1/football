$(document).ready(function() {

    $('.quarterback').click(function() {
        $('.qbItem').toggle("fast");
        $('#qb').toggle("fast");
    });
    $('.defensive-end').click(function() {
        $('.deItem').toggle("fast");
        $('#de').toggle("fast");
    });
    $('.linebacker').click(function() {
        $('.lbItem').toggle("fast");
        $('#lb').toggle("fast");
    });
    $('.corner-back').click(function() {
        $('.cbItem').toggle("fast");
        $('#cb').toggle("fast");
    });
    $(document).ready(function() {
        $('qbItem').hide();
        $('cbItem').hide();
        $('deItem').hide();
        $('lbItem').hide();
        $('#qb').hide();
        $('#cb').hide();
        $('#de').hide();
        $('#lb').hide();
})});
