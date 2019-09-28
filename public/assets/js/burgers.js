$(document).ready(function(){
    console.log("JS connected");
    // Eat Button
    $(".eat").on("click",function(){
        var id = $(this).data("id");

        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: {devoured: true}
        }).then(function(){
            location.reload();
            console.log(id+" eaten");
        });
    })
});