$('body').addClass('main');

$('ol').addClass('data');

$("#add").on("click", function(evt) {
    evt.preventDefault();
    movie = $('#movie').val();
    rating = $('#rating').val();
    newLi = $("<li>")
    $("ol").append("<li>" + movie + " " + rating + " <button>X</button>" + "</li>");
})

$("ol").on("click", ":button", function(evt) {
    evt.preventDefault();
    $(evt.target).parent().remove();
})