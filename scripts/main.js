document.querySelector("#form").addEventListener("submit",voucher)

var VoucherArr = JSON.parse(localStorage.getItem("user"))||[];

function voucher()
{
    event.preventDefault();
   document.querySelector("#name").innerText = "";
    var VoucherObj;

    VoucherObj = {
       Names : document.querySelector("#name").value,
        Email: document.querySelector("#email").value,
       Address : document.querySelector("#address").value,
       wallet : document.querySelector('#amount').value,
    };

    VoucherArr.push(VoucherObj);
    console.log(VoucherArr);
    localStorage.setItem("user",JSON.stringify(VoucherArr));
}