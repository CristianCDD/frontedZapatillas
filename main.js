let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

/* Contador de productos */
let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});


minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;

});


/* Agregar productos al carrito */

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {

    lastValue += userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();

});

/* Mostrar el panel de compra */

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector('.cart-modal');
/* const priceModal = document.querySelector('.cart-modal__price'); */
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        productContainer.innerHTML = '<p class = "cart-empty"> Your cart is empty <p>';

    }else{
        drawProductInModal();

    }

});


/* Cambiar imagenes con las flechas */

const imageContainer = document.querySelector('.gallery__image-container');

const previusGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
})


/* Mostrar la galeria enfocada para web */

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');


/* No permitir que durante una pantalla de movil se puede hacer el modo enfoque */
imageContainer.addEventListener('click',()=>{
    if(window.innerWidth >= 1115){
    imagesModal.style.display = 'grid';
        
    }
});

closeModalBtn.addEventListener('click',()=>{
    imagesModal.style.display = 'none';
})

/* Cambiar las imagenes a traves de las imagen miniaturas para web */

let thumbails = document.querySelectorAll('.gallery__thumnail');

thumbails = [...thumbails];

thumbails.forEach((thumbail)=>{
    thumbail.addEventListener('click',(e)=>{
        console.log(e.target.id);
     imageContainer.style.backgroundImage = `url('../images/image-product-${e.target.id}.jpg')`;

    });
});

/* Cambiar imagenes en el modo enfocado */

let modalthumbails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');

modalthumbails = [...modalthumbails];

modalthumbails.forEach((modalthumbail)=>{
modalthumbail.addEventListener('click',(e)=>{
console.log(e.target.id.slice(-1));
modalImageContainer.style.backgroundImage = `url('../images/image-product-${e.target.id.slice(-1)}.jpg')`;

})
})


const previusModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

previusModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
})

nextModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
})


/* Limpiar el panel de compra */

function deleteProduc(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class = "cart-empty"> Your cart is empty <p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}



function drawProductInModal() {
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
   
             <img class="cart-modal__image" src="images/image-product-1-thumbnail.jpg" alt="">
   
             <div>
               <p class="cart-modal__product">Autumn limited edition...</p>
               <p class="cart-modal__price">$125 x  ${lastValue} = <span>$ ${lastValue * 125}</span>
             </div>
             <img class="cart-modal__delete" src="images/icon-delete.svg" alt="delete">
           </div>
           <button class="cart-modal__checkout">Checkout</button>`

           /* Si es que presionamos el boton de borrar */
           deleteProduc();      
           const priceModal = document.querySelector('.cart-modal__price');

}

function changeNextImage(imageContainer) {
    if(imgIndex == 4){imgIndex = 1;}
    else{imgIndex++;}

     imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
     
}

function changePreviusImage(imageContainer) {
    if(imgIndex == 1){imgIndex = 4;}
    else{imgIndex--;}

     imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
     
}

/* Menu de navegacion para celular */

const menuNav = document.querySelector('.header__menu');
const barrDespl = document.querySelector('.modal-navbar__background');
const closeDespl = document.querySelector('.modal-navbar__close-icon');

menuNav.addEventListener('click',()=>{
    barrDespl.style.display = 'block';

})

closeDespl.addEventListener('click',()=>{
    barrDespl.style.display = 'none';
})