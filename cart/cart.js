const cart = JSON.parse(localStorage.getItem('cart'))
const prodCont = document.querySelector('.cart')
const subTotalPrice = document.querySelector('.total-price')
const totalPrice = document.querySelector('.total-price2')


function displayData() {
    let elements = '';
    cart.forEach((prod) => {
        elements += `
<div class="d-flex align-items-center justify-content-between prod p-4" data-id=${
            prod.id
        }>

<div> 
<i class ="fa-solid fa-xmark remove-btn"></i> 
</div>
        <div> 
       <a href=${
            prod.url
        }>
<a href = ${
            prod.url
        }> <img src=${

            prod.image
        } class='w-50' alt=""></a>
        </div>
<div> <a href=${
            prod.url
        }> <p class = "name">${
            prod.title
        } </p></a>
</div>

        <div><p>EGP${
            prod.price
        } </p> </div>
         <div class="btns-select d-flex justify-content-center align-items-center">
         <div class="btn-card decrease-btn"> <button> - </button>
</div>
<span class='quantity'>
    ${
            prod.quantity
        } </span>
  <div class="btn-card increase-btn"><button>+</button >
</div> </div>


    </div>

    `
    })

    prodCont.innerHTML = elements
    addEventsToBtn()
}
displayData()

function addEventsToBtn() {
    const increaseBtns = document.querySelectorAll('.increase-btn')
    const decreaseBtns = document.querySelectorAll('.decrease-btn')
    const removeBtns = document.querySelectorAll('.remove-btn')


    increaseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.prod');
            const id = parent.dataset.id;
            const prodObj = cart.find(prod => prod.id == id);
            prodObj.quantity ++;
            const quantityObj = parent.querySelector('.quantity');
            quantityObj.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
            calcTotal()

        })
    })
    decreaseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.prod');
            const id = parent.dataset.id;
            const prodObj = cart.find(prod => prod.id == id);
            if (prodObj.quantity == 1) 
                return;
            


            prodObj.quantity --;
            const quantityObj = parent.querySelector('.quantity');
            quantityObj.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
            calcTotal()

        })
    })

    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.prod');
            const id = parent.dataset.id;
            prodObj = cart.filter(prod => prod.id != id);

            parent.remove()

            localStorage.setItem('cart', JSON.stringify(prodObj))
            calcTotal()

        })
    })

}
function calcTotal() {
    let total = cart.reduce((acc, prod) => {
        return acc + (+ prod.price * prod.quantity);

    }, 0)
    console.log(total);
    subTotalPrice.textContent = total
    totalPrice.textContent = total

}
