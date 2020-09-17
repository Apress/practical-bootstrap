$(document).ready(function(){
    $('.modal').on('show.bs.modal', function(event){
       var $buttonClicked = $(event.relatedTarget);

       $(this).find('.modal-body').html("<h1>" + $buttonClicked.html() + " Clicked!</h1>");
    });
});
