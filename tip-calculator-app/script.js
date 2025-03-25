const amountInput = document.getElementById("amount")
const tipButtons = document.querySelectorAll(".buttons-container button")
const customTipInput = document.getElementById("tip")
const peopleInput = document.getElementById("number-of-people")
const tipPerson = document.getElementById("tip-person")
const totalTipPerson = document.getElementById("tip-total-person")
const resetButton = document.getElementById("rest")
const calculate = document.getElementsByClassName("calculate")
const errorMsg = document.querySelector(".error-msg")


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
});


let tipPercentage = 0;

tipButtons.forEach(button => {
    button.addEventListener("click", (e) => {

        tipButtons.forEach(btn => btn.classList.remove("active"))
        e.target.classList.add("active")
        const tipValue = e.target.textContent
        console.log(tipPercentage)
        tipPercentage = parseInt(tipValue);
       calculateTip()


    });
});

customTipInput.addEventListener("input", () => {
    const customTipValue = parseInt(customTipInput.value)
    if (!isNaN(customTipValue) && customTipValue > 0) {
      tipPercentage = customTipValue
   console.log(tipPercentage)
      tipButtons.forEach(btn => btn.classList.remove("active"))
      calculateTip()
    }
  });





  function calculateTip() {
    const amount = parseFloat(amountInput.value) || 0;
    const numberOfPeople = parseInt(peopleInput.value);

    if (!numberOfPeople || numberOfPeople <= 0) {
       
            errorMsg.style.display = "block"
      
        return;
    } else {
       
            errorMsg.style.display = "none"
        
    }

    if (amount > 0 && numberOfPeople > 0 && tipPercentage > 0) {
        const tipAmount = (amount * (tipPercentage / 100));
        const totalAmount = tipAmount * numberOfPeople;

        tipPerson.textContent = `$${tipAmount.toFixed(2)}`;
        totalTipPerson.textContent = `$${totalAmount.toFixed(2)}`;

        resetButton.disabled = false;
        resetButton.style.backgroundColor = "var(--green-400)"
    } else {
        tipPerson.textContent = "$0.00";
        totalTipPerson.textContent = "$0.00";
        resetButton.disabled = true;
    }
}


resetButton.addEventListener("click", () => {
    
    amountInput.value = ""
    peopleInput.value = ""
    customTipInput.value = ""

   
    tipPerson.textContent = "$0.00"
    totalTipPerson.textContent = "$0.00"

   
    errorMsg.style.display = "none"

 
    tipButtons.forEach(btn => btn.classList.remove("active"))
    tipPercentage = 0

   
    resetButton.disabled = true;
    resetButton.style.backgroundColor = "#0D686D"
});