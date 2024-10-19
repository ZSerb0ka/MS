    // JavaScript az elrendezés váltásához
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const productContainer = document.querySelector('.product-container');

    gridViewButton.addEventListener('click', () => {
        productContainer.classList.add('grid-view');
        productContainer.classList.remove('list-view');
    });

    listViewButton.addEventListener('click', () => {
        productContainer.classList.add('list-view');
        productContainer.classList.remove('grid-view');
    });