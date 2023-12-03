//buttons//
let setMoney = document.querySelector("#setMoney");
let getMoney = document.querySelector("#getMoney");
let showBalance = document.querySelector("#showBalance");
//input//
let input = document.querySelector("#inp1");
//balance//
let balance = document.querySelector("#balance")

let bank = [
    {
        balance: 0,
        limit: 5000,
    }
]

setMoney.addEventListener("click", let = () => {
    let inputValue = input.value
    bank.map(let = (item) => {
        if (+inputValue > 2500) {
            alert("Your Maximum Money in Limit is 2500$")
            input.value = ""
        }
        else if (inputValue == "") {
            alert("There is no Balance That Can be Increased")
            input.value = ""
        }
        else if (+inputValue < 0) {
            alert("Wrong Amount")
            input.value = ""
        }
        else {
            item.balance += +inputValue
            input.value = ""
            console.log(item.balance);
        }
        if (item.balance > item.limit) {
            alert("Your Maximum Wallet Limit is 5000$")         
        }
    })
})

getMoney.addEventListener("click", let = () => {
    let inputValue = input.value
    bank.map(let = (item) => {
        if (inputValue == "") {
            alert("There is no Balance That Can be Decrease")
            input.value = ""
        }
        else if (+inputValue > item.balance) {
            alert("There is no Enough Balance in Your Wallet")
            input.value = ""
        }
        else if (+inputValue < 0) {
            alert("Wrong Amount")
            input.value = ""
        }
        else {
            item.balance -= +inputValue
            input.value = ""
            console.log(item.balance);
        }

    })
})



showBalance.addEventListener("click", let = () => {
    let inputValue = input.value
    bank.map(let = (item) => {
        balance.innerHTML = `Balance: ${item.balance}$`
        console.log(item.balance);
    })
})
bank.map(let = (item) => {
    if (item.balance > item.limit) {
        balance.innerHTML = `Balance: ${item.balance}$`
        
    }
})





