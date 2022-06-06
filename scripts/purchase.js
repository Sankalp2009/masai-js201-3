var kenu = JSON.parse(localStorage.getItem("purchase"))||[];

    kenu.map(function(elem)
    {
        var box = document.createElement("div");

        var img = document.createElement("img");
        img.src = elem.image;

        var Names = document.createElement("p");
        Names.innerText = elem.name;

        var price = document.createElement("p")
        price.innerText = elem.price;
        
        box.append(img,Names,price)
        document.getElementById("purchased_vouchers").append(box);
    });