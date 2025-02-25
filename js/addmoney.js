document.getElementById('add-money-btn').addEventListener('click', function(event){
event.preventDefault();
  const amount = getInputValueByID("amount");
  const pin = getInputValueByID('pinNumber');
  const account = document.getElementById('account-number').value;
  const mainBalance = getInnerTextByID('main-balance');
  const selectedBank = document.getElementById('allbank').value;
  

  if(amount < 0){
    alert('Please valid amount')
    return; 
  }else{
    alert('Successfully!') 
  }

   
  if(account.length === 11){
    if(pin === 1234){
       const sum = amount + mainBalance ;
    //    document.getElementById('main-balance').innerText = sum;
       setInnerTextByIDandValue('main-balance', sum);

      //  
       const container = document.getElementById('transaction-container');
        

       const div = document.createElement('div');
       div.classList.add('bg-red-400')

       div.innerHTML= `
       <h1 class='text-yellow-300'> Added Money form${selectedBank} </h1>
       <h3>${amount}</h3>
        <p> account number: ${account}</p>
       `
       container.appendChild(div); 

      // 
       

    }else{
        alert('Invalid PIn ')
    }
  }else{
    alert('Wrong Account')
  }
})