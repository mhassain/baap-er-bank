document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Withdraw Input Field
    const withdrawField = document.getElementById('withdraw-field');
    const newWidthdrawAmountStr = withdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountStr);

    // Clear Field
    withdrawField.value = '';

    // NaN
    if(isNaN(newWidthdrawAmount)){
        alert("Please Input A Number");
        return;
    }

    // Withdraw Field
    const widthdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawAmountStr = widthdrawTotalElement.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawAmountStr);


    // Balance Field
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalStr = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalStr);

    if(newWidthdrawAmount > preBalanceTotal){
        alert("Insufficient Balance");
        return;
    }


    // Update Withdraw Field
    const currentWithdrawAmount = preWithdrawAmount + newWidthdrawAmount;

    // if(currentWithdrawAmount > preBalanceTotal){
    //     return;
    // }

    // Update Balance Field
     const newBalanceTotal = preBalanceTotal - currentWithdrawAmount;
     // Set Balance to Balance Field
     balanceTotalElement.innerText = newBalanceTotal;

    const currentBalanceTotal = preBalanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // Set Withdraw Input Field to Withdraw Field
     widthdrawTotalElement.innerText = currentWithdrawAmount;




})