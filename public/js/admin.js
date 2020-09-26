$(document).ready(() => {

        $.ajax({
            url: "/api/products",
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
            url: "/api/products/add",
            type: "POST",
            dataType: "json"
        })
        .done(data => {

        })

        $.ajax({
            url: "/api/category",
            type: "GET",
            dataType: "json"
        })

        .done(data=>{

            let categories = data.response;
            let categoriesLength = categories.length;

            $(".categories")[0].innerHTML = "";

            for(let i = 0; i < productsLength; i++) {
                const pTitle = document.createElement("p");

                pTitle.innerHTML = products[i].title;

                $(".categories").append(pTitle);
            }

        })

        $.ajax({
            url: "/api/category/add",
            type: "POST",
            dataType: "json"
        })

        .done(data =>{
            

        })
})