document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const preWithdrawAmount = getElementValueById('withdraw-total');
    const currentWithdrawTotal = preWithdrawAmount + newWithdrawAmount;
    setElementValueById('withdraw-total', currentWithdrawTotal);

    // balance
    const preBalancetotal = getElementValueById('balance-total');
    const currentBalanceTotal = preBalancetotal - currentWithdrawTotal;
    setElementValueById('balance-total', currentBalanceTotal);
})