/**
 * Created by David on 1/30/2016.
 */


$(document).ready(function(){
    $('#parsebutton').click(function(){
        $('#outtext').empty();
        $('#outtext').append($('#intext').val());
    });
});