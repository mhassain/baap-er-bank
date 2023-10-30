document.getElementById('btn-deposit').addEventListener('click', function(){
    // Deposit Input Field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountStr = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStr);

    // Clear Field
    depositField.value = '';

    // Deposit Field
    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositAmountStr = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(preDepositAmountStr);

    // Update Deposit Field
    const currentDepositTotal = previousDepositTotal + newDepositAmount; 
    
    // Set Deposit Input Field to Deposit Field
    depositTotalElement.innerText = currentDepositTotal;


    // Balance Field
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalStr = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalStr);

    // Update Balance Field
    const newBalanceTotal = preBalanceTotal + newDepositAmount;

    // Set Balance Total to Balance Field
    balanceTotalElement.innerText = newBalanceTotal;



})