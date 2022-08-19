document.getElementById('withdrow').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdrawInput');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Inter a Number')
        return;
    }


    const withdrawTotalElement = document.getElementById('withdrowTotal');
    const priviousWithdrawTotalString = withdrawTotalElement.innerText;
    const priviousWithdrawTotal = parseFloat(priviousWithdrawTotalString);


    const balanceElement = document.getElementById('balanceTotal');
    const priviousBalanceTotalString = balanceElement.innerText;
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);



    if (newWithdrawAmount > priviousBalanceTotal) {
        alert("You Dont't have Enough Money");
        return;
    }
    const newWithdrawTotal = priviousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const newBalanceTotal = priviousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})