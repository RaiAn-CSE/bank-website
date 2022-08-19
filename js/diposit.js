
document.getElementById('btn').addEventListener('click', function () {
    const dipositCost = document.getElementById('diposit');
    const newDepoAmountString = dipositCost.value;
    const newDepoAmount = parseFloat(newDepoAmountString);
    // console.log(amount);

    const dipoTotalAmount = document.getElementById('update');
    const previousDipositTotalString = dipoTotalAmount.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    const currentDipoTotal = previousDipositTotal + newDepoAmount;
    dipoTotalAmount.innerText = currentDipoTotal;


    const balanceTotalElement = document.getElementById('balanceTotal');
    const pbts = balanceTotalElement.innerText;
    const pbt = parseFloat(pbts);
    const ctb = pbt + newDepoAmount;
    // console.log(ctb);
    balanceTotalElement.innerText = ctb;


    dipositCost.value = '';

})