$(document).ready(function () {
    var currentDate = moment().format("dddd, MMM Do, YYYY");
    $("#currentDay").text(currentDate);

    var date = new Date();
    var currentHour = date.getHours();

    $('.inputbox').each(function () {
        var val = parseInt($(this).prop('id'));
        if (val > currentHour) {
            $(this).css('background-color', '#d1d0cc');
        } else if (val < currentHour) {
            $(this).css('background-color', '#313d4b');
        } else if (val === currentHour) {
            $(this).css('background-color', '#455c7b');
        } else {
            $(this).css('background-color', 'White');
        };
    });

    $(".edit_btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).siblings(".inputbox").attr("id");
        var value = $(this).siblings(".inputbox").val();
        localStorage.setItem(id, value);
    });

    $(".text").each(function () {
        var id = $(this).attr("id");
        $(this).val(localStorage.getItem(id));
    });

});
