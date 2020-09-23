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
})