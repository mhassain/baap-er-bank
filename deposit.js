
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // console.log(newDepositAmount);
    const preDepositAmount = getElementValueById('deposit-total');
    // console.log(preDepositAmount);
    const currentDepositTotal = preDepositAmount + newDepositAmount;
    // console.log(currentDepositTotal);
    setElementValueById('deposit-total', currentDepositTotal);

    // balance
    const preBalancetotal = getElementValueById('balance-total');
    const currentBalanceTotal = preBalancetotal + currentDepositTotal;
    setElementValueById('balance-total', currentBalanceTotal);

})
