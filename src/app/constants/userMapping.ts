const userToIdMapping = new Map<string,string >();

userToIdMapping.set('Todd (capital on the way)', 'person_ef089a78-a4db-4e43-b644-ed8434f6092b');
userToIdMapping.set('Roxanne (has offer)', 'person_a23dcf50-6cb0-468a-8be3-c6a11d21889a'); 
userToIdMapping.set('Dave (capital on way)','11223');
userToIdMapping.set('Allison (offer accepted)', '44556');


const businessIdMapping = new Map<string, string>();
businessIdMapping.set('person_a23dcf50-6cb0-468a-8be3-c6a11d21889a', 'business_3487d65a-faeb-470e-b497-95a0078dade7');

const offerMapping = new Map<string, string>();
offerMapping.set('person_ef089a78-a4db-4e43-b644-ed8434f6092b', "capital on way");
offerMapping.set('person_a23dcf50-6cb0-468a-8be3-c6a11d21889a', "has offer");
offerMapping.set('11223', "no offer");
export { businessIdMapping, userToIdMapping, offerMapping };
