// add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const postdepositAmountstr = depositField.value;
    const newDepositAmount = parseFloat(postdepositAmountstr);
    
    //Get the Current Deposit Total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalstr = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(depositTotalstr);
    // add numbers to set the total deposit
    const currentDepositTotal = preDepositTotal + newDepositAmount;

    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal; 

    // Get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalstr = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalstr);

    // calculate current balance total
    const currentBalanceTotal = preBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



    // Clear the input field.
    depositField.value = '';



})