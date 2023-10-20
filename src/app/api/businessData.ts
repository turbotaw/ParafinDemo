import {companySalesMap} from '../constants/companySalesMap';
import { userToIdMapping, offerMapping } from '../constants/userMapping';

async function fetchSalesData(business_id: string): Promise<{ totalSales: number, transactions: number }> {
    const value = companySalesMap.get(business_id);
    if(value !== undefined){
        return Promise.resolve(value);
    } else return Promise.resolve({totalSales: 0, transactions: 0});
}




async function fetchCreditOffer(person_id: string) {
    const value = offerMapping.get(person_id);
    if(value !== undefined){
        return Promise.resolve(value);
    } else return Promise.resolve('no-offer');
}

export { fetchCreditOffer, fetchSalesData };