$(document).ready(() => {
    
    $.ajax({
    url: "/api/admin/brand",
    type: "GET",
    dataType: "json"
    })

    .done(data=>{

        let brand = data.response;
        let brandsLength = brand.length;

        $(".brandList").innerHTML = "";

        for(let i = 0; i < brandsLength; i++) {
            const pTitle = document.createElement("p");

            pTitle.innerHTML = brands[i].title;

            $(".brandList").append(pTitle);
        }

    })


    var brandTitle = document.getElementsByClassName("brandTitle");
    var brandDescription = document.getElementsByClassName("brandDescription");
    var brandImageUrl = document.getElementsByClassName("brandImageUrl");

    $(".thisForm").submit(function(event) {
        event.preventDefault();
        addBrand();
    });



    function addBrand(){

        var formData = {
            title: $(".brandTitle").val(),
            brand: $(".brandDescription").val(),
            imageUrl: $(".brandImageUrl").val()
        }

        $.ajax({
            url: "/api/admin/brand/add",
            type: "POST",
            data: formData,
            dataType: "json",
            success: 


            function(newBrand) {
                $(".postResult").html("<p>New brand [" + newBrand.title + "] added!</p>")
            },
            error: function(errorMessage) {
                alert(JSON.stringify(errorMessage.responseJSON));
                console.log("ERROR: ", errorMessage.responseJSON);
            }
        });

        resetForm();
    }

    function resetForm(){
        $(brandTitle).val("");
        $(brandDescription).val("");
        $(brandImageUrl).val("");
    }

})