$(document).ready(function() {
    $('.modal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });

    $('#open-modal-button').on('click', function() {
        $('.modal').modal('show');
        return false;
    });
});
