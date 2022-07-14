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

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.previousElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.innerText = "Expand all";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.innerText = "Collapse all";
    }
  });
}

const buttonToTop = document.querySelector(".button-to-top");

buttonToTop.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        buttonToTop.style.display = "block";
    } else {
        buttonToTop.style.display = null;
    }
});

const productWrapper = document.querySelector(".product-wrapper");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

productWrapper.addEventListener("scroll", function() {
    nextPrevButton();
})

nextButton.addEventListener("click", function() {
    productWrapper.scrollLeft += 30;
    nextPrevButton();
});

prevButton.addEventListener("click", function() {
    productWrapper.scrollLeft -= 30;
    nextPrevButton();
});

let nextPrevButton = function() {
    let scrollLeft = productWrapper.scrollLeft;
    let scrollWidth = productWrapper.scrollWidth;
    let offsetWidth = productWrapper.offsetWidth;
    console.log(scrollWidth);
    if (scrollLeft === 0 && scrollWidth > 0) {
        prevButton.style.display = null;
        nextButton.style.display = "block";
    } else if (
        scrollLeft > 0 && 
        (scrollLeft + offsetWidth) < scrollWidth) {
        prevButton.style.display = "block";
        nextButton.style.display = "block"
    } else {
        nextButton.style.display = null;
    }
}

nextPrevButton();
