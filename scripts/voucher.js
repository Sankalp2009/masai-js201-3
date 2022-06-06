async function ken()
{
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
        let ren =  await fetch(url);
        let cong = await ren.json();
        display(cong[0].vouchers);
}
ken();
var kenu = JSON.parse(localStorage.getItem("purchase"))||[];
function display(data)
{
    data.forEach(function(elem)
    {
        var box = document.createElement("div");

        var img = document.createElement("img");
        img.src = elem.image;

        var Names = document.createElement("p");
        Names.innerText = elem.name;

        var price = document.createElement("p")
        price.innerText = elem.price;
        
        var btn = document.createElement("button")
        btn.innerText = "Buy"
        btn.className = "buy_voucher";
        btn.addEventListener("click",function()
        {
            Addtopurchase(elem);
        });
        box.append(img,Names,price,btn)
        document.getElementById("voucher_list").append(box);
    });
}
function  Addtopurchase(elem)
{
    console.log(elem);
    ken.push(elem);
    localStorage.setItem("purchase",JSON.stringify(ken));
}