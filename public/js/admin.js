$(document).ready(() => {

        $.ajax({
            url: "/api/admin/products",
            type: "GET",
            dataType: "json"
        })
        .done(data => {
            let products = data.response;
            let productsLength = products.length;

            $(".products")[0].innerHTML = "";

            for(let i = 0; i < productsLength; i++) {
                const pTitle = document.createElement("p");
                const pPrice = document.createElement("p");

                pTitle.innerHTML = products[i].title;
                pPrice.innerHTML = products[i].price;

                $(".products").append(pTitle, pPrice);
            };

        })

        $.ajax({
            url: "/api/admin/products/add",
            type: "POST",
            dataType: "json"
        })
        .done(data => {

        })

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
                success: function(category) {
                    $(".postResult").html("<p>New category [" + category.title + "] added!</p>")
                },
                error: function(e) {
                    alert("Error. Try something else.");
                    console.log("ERROR: ", e);
                }
            });

            resetForm();
        }

        function resetForm(){
            $(categoryTitle).val("");
            $(categoryImageUrl).val("");
        }
       
})