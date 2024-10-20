// Kosár hozzáadása
function addToCart(productId, productName, productPrice) {
    // A kosár tartalmának lekérése a localStorage-ból
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hozzáadjuk a terméket a kosárhoz
    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1 // Alapértelmezett mennyiség
    });

    // Kosár mentése a localStorage-ba
    localStorage.setItem('cart', JSON.stringify(cart));

    //alert(productName + ' hozzáadva a kosárhoz.');
}

// Kosár tartalmának megjelenítése a kosár oldalon
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-container');
    let total = 0;

    // Ha üres a kosár
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>A kosár üres</p>';
        return;
    }

    // Termékek listázása
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - Ár: ${item.price} €</p>
                <img src="img/termékek/Asiimov AK.png" alt="Asiimov AK" >
                <button onclick="removeFromCart(${index})">Eltávolítás</button>
            </div>
        `;
        total += item.price;
    });

    // Végösszeg
    cartContainer.innerHTML += `<p>Összesen: ${total} €</p>`;
}

// Termék eltávolítása a kosárból
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Termék eltávolítása az adott index alapján
    cart.splice(index, 1);

    // Frissített kosár mentése
    localStorage.setItem('cart', JSON.stringify(cart));

    // Kosár újratöltése
    displayCart();
}


