const clickChange = document.querySelector('.change-link')
clickChange.onclick = changeLink
const page1 = document.querySelector('#page-one');
const page2 = document.querySelector('#page-two');
const page3 = document.querySelector('#page-three');
const page4 = document.querySelector('#page-four');
const page5 = document.querySelector('#page-five');


const nextBtnStep1 = document.querySelector('.next-btn-step1');
nextBtnStep1.onclick = nextPage1

var name = '';
var email = '';
var phone = '';

var price1 = 0;
var price2 = 0;
var price3 = 0;
var price4 = 0;


function nextPage1(){
    const nameInput = document.querySelector('.name-input');
    const emailInput = document.querySelector('.email-input');
    const phoneInput = document.querySelector('.phone-input');

    const parentList = document.querySelectorAll('.error');

    name = nameInput.value;
    email = emailInput.value;
    phone = phoneInput.value;
    const values = [name, email, phone]

    const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9\.]+@[a-z]+\.com$/;
    const phoneRegex = /^\+[0-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;

    let counter = 0
    
    values.forEach(i=>{
        if (i.replaceAll(' ', '')===''){
            if (parentList[counter].classList.length===3) 
            parentList[counter].classList.remove('no-error')
        }
        else {
            if (parentList[counter].classList.length===2) 
            parentList[counter].classList.add('no-error')
        }
        counter+=1
    })

    if (parentList[0].classList.length===3&&parentList[1].classList.length===3&&parentList[2].classList.length===3) {
        if (!(nameRegex.test(name))) {
            if (parentList[0].classList.length===3) {parentList[0].classList.remove('no-error'); parentList[0].textContent='Invalid name' }
        }else {
            if (parentList[0].classList.length===2) parentList[0].classList.add('no-error')
        }

        if (!(emailRegex.test(email))) {
            if (parentList[1].classList.length===3) {parentList[1].classList.remove('no-error'); parentList[1].textContent = 'Invalid email'}
        }else {
            if (parentList[1].classList.length===2) parentList[1].classList.add('no-error')
        }

        if (!(phoneRegex.test(phone))) {
            if (parentList[2].classList.length===3) {parentList[2].classList.remove('no-error'); parentList[2].textContent = 'Invalid phone'}
        }else {
            if (parentList[2].classList.length===2) parentList[2].classList.add('no-error')
        }
    }

    if (parentList[0].classList.length===3&&parentList[1].classList.length===3&&parentList[2].classList.length===3) {
        page1.classList.toggle('container-none')
        page2.classList.toggle('container-none')
    }

    

}

const nextBtnStep2 = document.querySelector('.next-btn-step2');
nextBtnStep2.onclick = nextPage2

var monthlyOrYearly = '';
var mode = ''
function nextPage2(){
    const monthMode = document.querySelector('.monthly')
    if (monthMode.classList.length===2) monthlyOrYearly = 'Monthly'
    else monthlyOrYearly = 'Yearly'

    if (arcadeModeDiv.classList.length===2) mode = 'Arcade'
    else if(advancedModeDiv.classList.length===2) mode = 'Advanced'
    else if(proModeDiv.classList.length===2) mode = 'Pro'

    page2.classList.toggle('container-none')
    page3.classList.toggle('container-none')

    if (monthlyOrYearly==='Yearly') {
        document.getElementById('add-on-one-price').textContent = "+$10/yr"
        document.getElementById('add-on-two-price').textContent = "+$20/yr"
        document.getElementById('add-on-three-price').textContent = "+$20/yr"
        document.getElementById("add-on-item1-price").textContent = '+$10/yr'
        document.getElementById("add-on-item2-price").textContent = '+$20/yr'
        document.getElementById("add-on-item3-price").textContent = '+$20/yr'
    }
    else {
        document.getElementById('add-on-one-price').textContent = "+$1/mo"
        document.getElementById('add-on-two-price').textContent = "+$2/mo"
        document.getElementById('add-on-three-price').textContent = "+$2/mo"
        document.getElementById("add-on-item1-price").textContent = '+$1/mo'
        document.getElementById("add-on-item2-price").textContent = '+$2/mo'
        document.getElementById("add-on-item3-price").textContent = '+$2/mo'
    }
}

const nextBtnStep3 = document.querySelector('.next-btn-step3');
nextBtnStep3.onclick = nextPage3

function nextPage3(){
    document.querySelector('.plan-js').textContent = '(' + monthlyOrYearly + ')'
    document.querySelector('.mode-js').textContent = ' ' + mode

    const pricePlanOnlyPage4 = document.querySelector('.mode-package-price')

    if (mode==='Arcade'&&monthlyOrYearly==='Monthly') {
        pricePlanOnlyPage4.textContent = '$9/mo'
        price1 = 9
    }
    else if (mode==='Arcade'&&monthlyOrYearly==='Yearly') {
        pricePlanOnlyPage4.textContent = '$90/yr'
        price1 = 90
    }
    else if (mode==='Advanced'&&monthlyOrYearly==='Monthly') {
        pricePlanOnlyPage4.textContent = '$12/mo'
        price1 = 12
    }
    else if (mode==='Advanced'&&monthlyOrYearly==='Yearly') {
        pricePlanOnlyPage4.textContent = '$120/yr'
        price1 = 120
    }
    else if (mode==='Pro'&&monthlyOrYearly==='Monthly') {
        pricePlanOnlyPage4.textContent = '$15/mo'
        price1 = 15
    }
    else if (mode==='Pro'&&monthlyOrYearly==='Yearly') {
        pricePlanOnlyPage4.textContent = '$150/yr'
        price1 = 150
    }

    const perMonthOrYear = document.querySelector('.per-js')

    if (monthlyOrYearly==='Monthly') perMonthOrYear.textContent = '(per month)'
    else perMonthOrYear.textContent = '(per year)'

    const addOn1 = document.querySelector('.first-add-on-bill');
    const addOn2 = document.querySelector('.second-add-on-bill');
    const addOn3 = document.querySelector('.third-add-on-bill');

    if (document.getElementById('add-on-one').classList.length!==2) {
        addOn1.style.display = "none"
        price2 = 0
    }else {
        addOn1.style.display = "flex"
        if (monthlyOrYearly==='Monthly') price2 = 1
        else price2 = 10
    }

    if (document.getElementById('add-on-two').classList.length!==2) {
        addOn2.style.display = 'none'
        price3 = 0
    }else {
        addOn2.style.display = 'flex'
        if(monthlyOrYearly==='Monthly') price3 = 2
        else price3 = 20
    }

    if (document.getElementById('add-on-three').classList.length!==2) {
        addOn3.style.display = 'none'
        price4 = 0
    }else {
        addOn3.style.display = 'flex'
        if(monthlyOrYearly==='Monthly') price4=2;
        else price4=20;
    }
    
    let finalPrice = price1 + price2 + price3 + price4;
    const totalPrice = document.querySelector('.total-price')
    
    if (monthlyOrYearly==='Monthly') totalPrice.textContent = '$' + finalPrice + '/mo'
    else totalPrice.textContent = '$' + finalPrice + '/yr'
    console.log(price1, price2, price3, price4)

    page3.classList.toggle('container-none')
    page4.classList.toggle('container-none')

    
}

const goBackPage2 = document.querySelector('.go-back-step2');
const goBackPage3 = document.querySelector('.go-back-step3');
const goBackPage4 = document.querySelector('.go-back-step4');

goBackPage2.onclick = backPage2
goBackPage3.onclick = backPage3
goBackPage4.onclick = backPage4

function backPage2() {
    page2.classList.toggle('container-none');
    page1.classList.toggle('container-none');
}

function backPage3() {
    page3.classList.toggle('container-none');
    page2.classList.toggle('container-none');
}

function backPage4() {
    page4.classList.toggle('container-none');
    page3.classList.toggle('container-none');
}






const arcadeModeDiv = document.querySelector('.arcade');
const advancedModeDiv = document.querySelector('.advanced');
const proModeDiv = document.querySelector('.pro');

const modesArray = [arcadeModeDiv, advancedModeDiv, proModeDiv];

modesArray.forEach(mode=>{
    mode.onclick = modeFunction;
})

function modeFunction() {
    modesArray.forEach(remove=>{
        if (remove.classList.length===2) {
            remove.classList.toggle('modes-div-active')
        }
    })
    this.classList.toggle('modes-div-active')
}

const monthYearButton = document.querySelector('.month-year-button');
monthYearButton.onclick = monthYearFunction;

const modeDescriptionArray = document.querySelectorAll('.mode-description')
const monthlyModePrice = ['$9/mo', '$12/mo', '$15/mo'];
const yearlyModePrice = ['$90/yr', '$120/yr', '$150/yr'];

function monthYearFunction() {
    document.querySelector('.monthly').classList.toggle('selected');
    document.querySelector('.yearly').classList.toggle('selected');

    monthYearButton.classList.toggle('yearly-mode');

    document.querySelectorAll('.free').forEach(free=>{
        free.classList.toggle('yearly-add-free')
    })

    if (monthYearButton.classList.length===1) {
        for (let i=0;i<modeDescriptionArray.length;i++) {
            modeDescriptionArray[i].textContent = monthlyModePrice[i]
        }
    }else {
        for (let i=0;i<modeDescriptionArray.length;i++) {
            modeDescriptionArray[i].textContent = yearlyModePrice[i]
        }
    }
}

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const checkboxArr = [checkbox1, checkbox2, checkbox3];

checkboxArr.forEach(func=>{
    func.onclick = checkboxClickFunction;
})



function checkboxClickFunction() {
    if (this.name==='checkbox1') {
        document.getElementById('add-on-one').classList.toggle('checked')   
    }else if (this.name==='checkbox2') {
        document.getElementById('add-on-two').classList.toggle('checked')
    }else {
        document.getElementById('add-on-three').classList.toggle('checked')
    }
}

function changeLink() {
    page4.classList.toggle('container-none')
    page2.classList.toggle('container-none')
}

const confirmBtn = document.querySelector('.confirm-btn')
confirmBtn.onclick = confirmFunction

function confirmFunction() {
    page4.classList.toggle('container-none')
    page5.classList.toggle('container-none')
}
