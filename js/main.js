var productElm = function(name, discountPrice, price, discount, image) {
    return `
        <li class="product-item">
            <img class="product-item__img" src="${image}" alt="nike aj1 retro hight white university blur black" />
            <div class="product-item__info">
                <p class="product-item__name">${name}</p>
                <div class="product-item__price">
                    <p class="product-item__price--discount">Rp${discountPrice}</p>
                    <p class="product-item__price--normal">
                        <del>Rp${price}</del> <span class="product-item__discount">${discount}%</span>
                    </p>
                </div>
            </div>
            <div class="product-item__action">
                <button class="button button-blue w-100" type="submit">Add to bag</button>
            </div>
        </li>`;
}

let productListElm = function(products, productContainer) {
    products = products.map(product => productElm(
        product.name,
        product.discountPrice,
        product.price,
        product.discount,
        product.image
    )).reduce((acc, curr) => acc + curr);
    productContainer.innerHTML = products;
}
