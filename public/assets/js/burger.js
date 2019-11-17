$(function() {
    $('.eat-burger').on('click', function(event) {
        var id = $(this).data('id');
        console.log('eat button clicked');

        $.ajax('/api/burger/' + id, {
            type: 'PUT',
            data: true
        }).then(function() {
            console.log('updated burger status');
            location.reload();
        });
    });

    $('.submit-burger').on('click', function(event) {
        var addBurger = {
            name: $("#burger-name").val().trim()
        }
        console.log(`add button clicked`);

        $.ajax('/api/burger', {
            type: 'POST',
            data: addBurger
        }).then(function() {
            console.log(`add burger`);
            location.reload();
        });
    });
});