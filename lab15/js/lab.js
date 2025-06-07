$("#activate").click(function(){
    console.log("click!");
})

$.ajax({
    // url for the request
    url: "https://dog.ceo/api/breeds/image/random",
    // data (i didnt see any required?)
    // post or get request
    type: "GET",
    //dataType
    dataType: "json",

    // what to do when the call is successful
    success: function(data) {
        console.log(data);

        // pull out relevant info
        let image = data.image;

        // put data in output
        $("#output").append(`<img src='${image}' />`);
    },
    // failure state
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    },
});