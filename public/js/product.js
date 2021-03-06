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
        url: "/api/admin/products/add/brands",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let brands = data.response;
        let brandsLength = brands.length;

        $("#productBrand")[0].innerHTML = "";

        for(let i = 0; i < brandsLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = brands[i].title;
            $("#productBrand").append(option);
        };

    })

    $.ajax({
        url: "/api/admin/products/add/categories",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let categories = data.response;
        let categoriesLength = categories.length;

        $("#productCategory")[0].innerHTML = "";

        for(let i = 0; i < categoriesLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = categories[i].title;

            $("#productCategory").append(option);
        };

    })

    $.ajax({
        url: "/api/admin/products/add/tags",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let tags = data.response;
        let tagsLength = tags.length;

        $("#productTag")[0].innerHTML = "";

        for(let i = 0; i < tagsLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = tags[i].title;

            $("#productTag").append(option);
        };

    })

    $.ajax({
        url: "/api/admin/products/add/colors",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let colors = data.response;
        let colorsLength = colors.length;

        $("#productColor")[0].innerHTML = "";

        for(let i = 0; i < colorsLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = colors[i].title;

            $("#productColor").append(option);
        };

    })

    $.ajax({
        url: "/api/admin/products/add/sizes",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let sizes = data.response;
        let sizesLength = sizes.length;

        $("#productSize")[0].innerHTML = "";

        for(let i = 0; i < sizesLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = sizes[i].title;

            $("#productSize").append(option);
        };

    })

    $.ajax({
        url: "/api/admin/products/add/fits",
        type: "GET",
        dataType: "json"
    })
    .done(data => {
        let fits = data.response;
        let fitsLength = fits.length;

        $("#productFit")[0].innerHTML = "";

        for(let i = 0; i < fitsLength; i++) {
            const option = document.createElement("option");

            option.innerHTML = fits[i].title;

            $("#productFit").append(option);
        };

    })

    $(".thisForm").submit(function(event) {
        event.preventDefault();
        addProduct();
    });

    var productTitle = document.getElementById("productTitle");
    var productPrice = document.getElementById("productPrice");
    var productDescription = document.getElementById("productDescription");
    var productQuantity = document.getElementById("productQuantity");
    var productImageUrl = document.getElementById("productImageUrl");
    var productBrand = document.getElementById("productBrand");
    var productCategory = document.getElementById("productCategory");
    var productColor = document.getElementById("productColor");
    var productFit = document.getElementById("productFit");
    var productSize = document.getElementById("productSize");
    var productTag = document.getElementById("productTag");

    function addProduct(){
    
        var selectedBrand = productBrand.options[productBrand.selectedIndex].text;

        var selectedCategory = productCategory.options[productCategory.selectedIndex].text;
        var selectedColor = productColor.options[productColor.selectedIndex].text;
        var selectedTag = productTag.options[productTag.selectedIndex].text;
        var selectedFit = productFit.options[productFit.selectedIndex].text;
        var selectedSize = productSize.options[productSize.selectedIndex].text;

        var formData = {
            title: $("#productTitle").val(),
            brand: selectedBrand,
            description: $("#productDescription").val(),
            price: $("#productPrice").val(),
            tag: selectedTag,
            color: selectedColor,
            fit: selectedFit,
            size: selectedSize,
            imageUrl: $("#productImageUrl").val(),
            category:selectedCategory,
            quantity: $("#productQuantity").val()
        }

        $.ajax({
            url: "/api/admin/products/add",
            type: "POST",
            data: formData,
            dataType: "json",
            success: 
                function(newProduct) {
                    $(".postResult").html("<p>New product [" + newProduct.title + "] added!</p>")
                },
            error: 
            
                function(errorMessage) {
                    alert(JSON.stringify(errorMessage.responseJSON));
                    console.log("ERROR: ", errorMessage.responseJSON);
                }
        });

        resetForm();
    }

    function resetForm(){
        $(productTitle).val("");
        $(productBrand).val("");
        $(productDescription).val("");
        $(productPrice).val("");
        $(productTag).val("");
        $(productColor).val("");
        $(productFit).val("");
        $(productImageUrl).val("");
        $(productCategory).val("");
        $(productQuantity).val("");
        $(productSize).val("");
    }

})