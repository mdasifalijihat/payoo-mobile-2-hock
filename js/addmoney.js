document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pinNumber");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("allbank").value;

    if (amount < 0) {
      alert("Please valid amount");
      return;
    } else {
      alert("Successfully!");
    }

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = amount + mainBalance;
        //    document.getElementById('main-balance').innerText = sum;
        setInnerTextByIDandValue("main-balance", sum);

        //  date
        const currentDate = new Date().toLocaleDateString();

        //
        const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
        div.classList.add("bg-white");

        div.innerHTML = `
       <div class="border rounded-lg text-start p-4 ">
       <h1 class='text-black'> Added Money form: ${selectedBank} </h1>
       <h3> Amount: ${amount}</h3>
        <p> account number: ${account}</p>
        <p> Date: ${currentDate} </p>
       </div>
       `;
        container.appendChild(div);

        //
      } else {
        alert("Invalid PIn ");
      }
    } else {
      alert("Wrong Account");
    }
  });
