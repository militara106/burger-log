$(document).ready(function () {
    console.log("JS connected");

    // Eat Button
    $(".eat").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(function () {
            location.reload();
            console.log(id + " eaten");
        });
    });

    // Add Button
    $(".add-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
            console.log(newBurger + " added");
        })
    });
});