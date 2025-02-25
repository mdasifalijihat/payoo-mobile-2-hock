document.getElementById('add-money-btn').addEventListener('click', function(event){
event.preventDefault();
  const amount = getInputValueByID("amount");
  const pin = getInputValueByID('pinNumber');
  const account = document.getElementById('account-number').value;
  const mainBalance = getInnerTextByID('main-balance');

   
  if(account.length === 11){
    if(pin === 1234){
       const sum = amount + mainBalance ;
    //    document.getElementById('main-balance').innerText = sum;
       setInnerTextByIDandValue('main-balance', sum)
       alert('Successfully!') 

    }else{
        alert('Invalid PIn ')
    }
  }else{
    alert('Wrong Account')
  }
})