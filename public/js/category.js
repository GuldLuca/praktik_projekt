$(document).ready(() => {
    $.ajax({
    url: "/api/admin/category",
    type: "GET",
    dataType: "json"
    })

    .done(data=>{

        let categories = data.response;
        let categoriesLength = categories.length;

        $(".categoryList").innerHTML = "";

        for(let i = 0; i < categoriesLength; i++) {
            const pTitle = document.createElement("p");

            pTitle.innerHTML = categories[i].title;

            $(".categoryList").append(pTitle);
        }

    })


    var categoryTitle = document.getElementsByClassName("categoryTitle");
    var categoryImageUrl = document.getElementsByClassName("categoryImageUrl");

    $(".thisForm").submit(function(event) {
        event.preventDefault();
        addCategory();
    });



    function addCategory(){

        var formData = {
            title: $(".categoryTitle").val(),
            imageUrl: $(".categoryImageUrl").val()
        }

        $.ajax({
            url: "/api/admin/category/add",
            type: "POST",
            data: formData,
            dataType: "json",
            success: 


            function(newCategory) {
                $(".postResult").html("<p>New category [" + newCategory.title + "] added!</p>")
            },
            error: function(errorMessage) {
                alert(JSON.stringify(errorMessage.responseJSON));
                console.log("ERROR: ", errorMessage.responseJSON);
            }
        });

        resetForm();
    }

    function resetForm(){
        $(categoryTitle).val("");
        $(categoryImageUrl).val("");
    }

})