


const product = [
    {
        id: 0,
        image: 'cam1.jpg',
        title: 'Z2500 DSLR camera',
        price: 120,
    },
    {
        id: 1,
        image: 'lap1.jpg',
        title: 'Macbook Laptop',
        price: 600,
    },
    {
        id: 3,
        image: 'tshirt.jpg',
        title: 'Black t-Shirt',
        price: 15,
    },
    {
        id: 4,
        image: 'chasma.jpg',
        title: 'Best branded ',
        price: 10,
    },
    {
        id: 5,
        image: 'book.jpg',
        title: 'UPSC ',
        price: 5,
    },
    {
        id: 6,
        image: 'Crompton-cooler.jpg',
        title: 'Crompton-cooler',
        price: 80,
    },
    {
        id: 7,
        image: 'mobile.jpg',
        title: ' Flip Foldable Mobile',
        price: 230,
    },
    {
        id: 8,
        image: 'watch.jpg',
        title: 'Watch',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => { return item }))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'> Add to cart </button>" + `</div>
            </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}