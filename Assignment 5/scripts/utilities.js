// getting tile with reusable function

function getTitleElementById(titleId) {
    const titleElement = document.getElementById(titleId)
    const title = titleElement.innerText
    return title;
}

// Set title element
function setTitle(elementId, value) {
    const titleContainer = document.getElementById("title-container")
    const count = titleContainer.childElementCount
    const p = document.createElement('p')
    titleContainer.appendChild(p)
    p.classList.add("my-4", "text-2xl")

    p.innerHTML = `${count + 1} ${value}`
}

// getting price from product

function getPriceValue(priceValueId) {
    const priceElement = document.getElementById(priceValueId)
    const priceString = priceElement.innerText
    const price = parseFloat(priceString)
    return price
}

// Set price value
function setTotalPrice(price) {
    const intialTotalPrice = document.getElementById("initial-total-price")
    const intialTotalString = intialTotalPrice.innerText
    const intialTotal = parseFloat(intialTotalString)
    const totalPrice = intialTotal + price
    if (totalPrice > 0) {
        const purchaseBtn = document.getElementById("btn-purchase")
        purchaseBtn.removeAttribute("disabled")
    }

    const totalPriceElement = document.getElementById("total-price")
    intialTotalPrice.innerText = totalPrice
    totalPriceElement.innerText = totalPrice
    return totalPrice
}

// Apply discount
document.getElementById("coupon").addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text == "SELL200") {
        const applyBtn = document.getElementById('apply-btn')
        applyBtn.removeAttribute("disabled")
    }
    else {
        const applyBtn = document.getElementById('apply-btn')
        applyBtn.setAttribute('disabled', true)
    }

})
// Caculating percentage
document.getElementById("apply-btn").addEventListener("click", function () {
    const totalAmountElement = document.getElementById("initial-total-price")
    const totalPrice = document.getElementById("total-price")
    const totalAmountString = totalAmountElement.innerText
    const totalAmount = parseFloat(totalAmountString)

    if (totalAmount > 200){
        const discountPrice = (20 * totalAmount) / 100;
        const discountPriceElement = document.getElementById("discount-price")
        discountPriceElement.innerText = discountPrice.toFixed(2)

        const currentTotalPrice = totalAmount - discountPrice

        totalAmountElement.innerText = currentTotalPrice.toFixed(2)
        totalPrice.innerText = currentTotalPrice.toFixed(2)
    }
})

// Home Btn
document.getElementById("home-btn").addEventListener("click",function(){
    const totalAmountElement = document.getElementById("initial-total-price")
    const discountPriceElement = document.getElementById("discount-price")
    const totalPrice = document.getElementById("total-price")
    const titleContainer = document.getElementById("title-container")
    const purchaseBtn = document.getElementById("btn-purchase")
    purchaseBtn.setAttribute("disabled",true)

    
    titleContainer.remove()
    totalAmountElement.innerText = "00"
    discountPriceElement.innerText = "00"
    totalPrice.innerText = "00"
})
