document.getElementById('check').addEventListener('click',dochange);
const prices = document.getElementsByClassName('price');

function dochange() {
    if(check.checked == true){
        prices[0].innerHTML = '19.99';
        prices[1].innerHTML = '24.99';
        prices[2].innerHTML = '39.99';
    }
    else{
        prices[0].innerHTML = '199.99';
        prices[1].innerHTML = '249.99';
        prices[2].innerHTML = '399.99';
    }
}