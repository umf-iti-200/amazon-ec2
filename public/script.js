function getNextRandomNumber() {
    
    $.get("/api/random", function (response) {
        $("#output").text(response)
    });
}

$(document).ready(function () {

    // Call this function when the open is opened
    getNextRandomNumber();

    $("#btn-next-random").click(function () {
        getNextRandomNumber();
    })
});
