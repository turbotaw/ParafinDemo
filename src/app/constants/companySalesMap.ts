// Create a new empty Map
const companySalesMap = new Map<string, {totalSales: number, transactions: number}>();

// Use the set method to add key-value pairs
companySalesMap.set('person_ef089a78-a4db-4e43-b644-ed8434f6092b', { totalSales: 100000, transactions: 100 });
companySalesMap.set('person_a23dcf50-6cb0-468a-8be3-c6a11d21889a', { totalSales: 200000, transactions: 265 });
companySalesMap.set('4321', { totalSales: 1500000, transactions: 3000 });
companySalesMap.set('123', { totalSales: 30000000, transactions: 25000 });

// Export the map
export { companySalesMap };
