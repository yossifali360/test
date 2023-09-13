// ======= start login
let tabs = document.querySelectorAll('.tabs em')
let tabsArray = Array.from(tabs)
let divs = document.querySelectorAll('.tabs-content > div')
let divsArray = Array.from(divs)


tabsArray.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'

    })
})

var loginBtn = document.querySelector('.btn-login')
var emailInput = document.querySelector('.email-input')
var passInput = document.querySelector('.pass-input')
var errorEmail = document.getElementById('email-error')
var errorPass = document.getElementById('pass-error')

loginBtn.addEventListener('click', function () {
    validated()


})
emailInput.addEventListener('textInput', email_verify)
passInput.addEventListener('textInput', pass_verify)

function validated() {
    if (emailInput.value.length < 8) {
        errorEmail.style.display = 'block'
        return false
    }
    if (passInput.value.length < 1) {
        errorPass.style.display = 'block'
        return false
    }

}
function email_verify() {
    if (emailInput.value.length >= 8) {
        errorEmail.style.display = 'none'
        return true

    }
}
function pass_verify() {
    if (passInput.value.length >= 1) {
        errorPass.style.display = 'none'
        return true

    }
}


// ======= end login
