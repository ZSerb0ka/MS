function addToCart(productId, productName, productPrice, productImage) {
    // A kosár tartalmának lekérése a localStorage-ból
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ellenőrizzük, hogy a termék már létezik-e a kosárban
    let productExists = cart.find(item => item.id === productId);

    if (productExists) {
        // Ha létezik, növeljük a mennyiséget
        productExists.quantity += 1;
    } else {
        // Ha nem létezik, hozzáadjuk a kosárhoz új termékként
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,  // Új paraméter: kép URL
            quantity: 1
        });
    }

    // Kosár mentése a localStorage-ba
    localStorage.setItem('cart', JSON.stringify(cart));
}


function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-container');
    let total = 0;

    // Ha üres a kosár
    if (cart.length === 0) {
        cartContainer.innerHTML = '<a class="kosar2" href="termekek.html" title="Szerintem vegyél valamit"><h5 class="kosar">A kosár üres</h5></a>';
        cartContainer.style.height = "800px";  // Magasság beállítása
        return;
    }

    // Termékek listázása
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        // A terméket annyiszor jelenítjük meg, ahányszor hozzá lett adva
        for (let i = 0; i < item.quantity; i++) {
            cartContainer.innerHTML += `
                <div class="product cart-item col-md-3">
                    <p>
                    <h5>${item.name} </h5>- Ár: ${item.price} €</p>
                    <img src="${item.image}" alt="${item.name}">
                    
                    <button onclick="removeFromCart(${index})"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg></button>
                </div>
            `;
            total += item.price;
        }
    });

    // Végösszeg
    cartContainer.innerHTML += `<p class="price total-price">Összesen: ${total.toFixed(2)} €</p>`;

}



function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Csökkentjük az adott indexhez tartozó termék mennyiségét
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        // Ha a mennyiség 1, akkor teljesen eltávolítjuk a terméket
        cart.splice(index, 1);
    }

    // Frissített kosár mentése
    localStorage.setItem('cart', JSON.stringify(cart));

    // Kosár újratöltése
    displayCart();
}
