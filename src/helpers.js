export const calculateTotal = (amount, termToPay) => {
    let totalAmount;
    let totalTermToPay;
    if(amount <= 1000) {
        totalAmount = amount * .25;
    }
    else if(amount > 1000 && amount <= 5000) {
        totalAmount = amount * .2;
    }
    else if(amount > 5000 && amount <= 10000) {
        totalAmount = amount * .15;
    }
    else {
        totalAmount = amount * .1;
    }

    switch(termToPay) {
        case 3: 
            totalTermToPay = amount * .005;
        break;
        case 6: 
            totalTermToPay = amount * .10;
        break;
        case 12: 
            totalTermToPay = amount * .15;
        break;
        case 24: 
            totalTermToPay = amount * .20;
        break;
        default: break;
            
    }
    return totalAmount + totalTermToPay + amount;
}