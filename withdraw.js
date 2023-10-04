// add event listener to withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldstr = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawFieldstr);
    //console.log(newWithdrawTotal);

    // get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementstr = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalElementstr);
    
    
    // get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalstr = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalstr);
    
    // clear the input field
    withdrawField.value = '';
    
    if(newWithdrawTotal > preBalanceTotal){
        alert('Unsufficient balance');
        return;
    }
    // get the current withdraw total 
    const currentWithdrawTotal = preWithdrawTotal + newWithdrawTotal
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // calculate current balance total amount
     const currentBalanceTotal = preBalanceTotal - currentWithdrawTotal;
     // set the balance total
     balanceTotalElement.innerText = currentBalanceTotal;

});