import {companySalesMap} from '../constants/companySalesMap';

async function fetchSalesData(business_id: string): Promise<{ totalSales: number, transactions: number }> {
    const value = companySalesMap.get(business_id);
    if(value !== undefined){
        return Promise.resolve(value);
    } else return Promise.resolve({totalSales: 0, transactions: 0});
}

export { fetchSalesData };


async function fetchCreditOffer(salesData: { totalSales: number, transactions: number }): Promise<{ amount: number, interestRate: number }> {
    const sales = salesData.totalSales;
    const transactions = salesData.transactions;

    if (sales < 100000 || transactions < 200) {
        return Promise.resolve({ amount: 0, interestRate: 0 });
    }
    else if (sales > 100000 && sales < 1000000) {
        return Promise.resolve({ amount: (sales * .15), interestRate: 8.5 });
    }
    else if (sales > 1000000 && transactions < 10000) {
        return Promise.resolve({ amount: (sales * .15), interestRate: 6.5 });
    }
    else if (sales > 1000000 && transactions > 10000) {
        return Promise.resolve({ amount: (sales * .25), interestRate: 6.5 });
    }
    return Promise.resolve({ amount: 0, interestRate: 0 });
}

export { fetchCreditOffer };