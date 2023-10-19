// Create a new empty Map
const companySalesMap = new Map<string, {totalSales: number, transactions: number}>();

// Use the set method to add key-value pairs
companySalesMap.set('1234', { totalSales: 100000, transactions: 100 });
companySalesMap.set('5678', { totalSales: 200000, transactions: 265 });
companySalesMap.set('4321', { totalSales: 1500000, transactions: 3000 });
companySalesMap.set('8765', { totalSales: 30000000, transactions: 25000 });

// Export the map
export { companySalesMap };
