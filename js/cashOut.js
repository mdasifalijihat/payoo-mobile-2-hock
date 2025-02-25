document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueByID("cahsout-amount");
    const pinNumber = getInputValueByID('cashout-pin');
    const mainBalance =getInnerTextByID('main-balance')

    if (accountNumber.length === 11) {
        if(pinNumber === 1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandValue('main-balance', sum)
        }else{
            alert('Wrong Pin Number ')
        }
    } else {
      alert("Account number not valid");
    }
  });
