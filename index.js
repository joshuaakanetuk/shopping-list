$(function() {
    // Adding to list
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault();
        let userInput = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        let item = '<li> <span class="shopping-item">' + userInput + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
        $('.shopping-list').append(item);
    });
    // Button Handler
    $('ul').on('click', 'button',  function(e) {
        if($(this)[0].innerText === 'check') {
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        }
        else {
            $(this).closest('li').remove();
        }
    });

});