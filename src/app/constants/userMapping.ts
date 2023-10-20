const userToIdMapping = new Map<string,string >();

userToIdMapping.set('Todd (funded)', 'person_ef089a78-a4db-4e43-b644-ed8434f6092b');
userToIdMapping.set('Roxanne (has offer)', 'person_a23dcf50-6cb0-468a-8be3-c6a11d21889a'); 
userToIdMapping.set('James (funding on the way', 'person_721ffd83-a84e-45fe-a658-720b332757ca');
userToIdMapping.set('Jane (no offer)', 'person_75aee078-5216-4319-8f89-30ba33c2817c');



const businessIdMapping = new Map<string, string>();
businessIdMapping.set('person_a23dcf50-6cb0-468a-8be3-c6a11d21889a', 'business_3487d65a-faeb-470e-b497-95a0078dade7');
businessIdMapping.set('person_ef089a78-a4db-4e43-b644-ed8434f6092b', 'business_39419781-cfdd-48fc-a1b1-57c93651835c');
businessIdMapping.set('person_721ffd83-a84e-45fe-a658-720b332757ca', 'business_76ae1e29-cca1-4220-a220-1019f2a783b4');
businessIdMapping.set('person_75aee078-5216-4319-8f89-30ba33c2817c', 'business_7ca01d43-a9ff-47cb-b2f1-93951c2c6f3b');

const offerMapping = new Map<string, string>();
offerMapping.set('person_ef089a78-a4db-4e43-b644-ed8434f6092b', 'funded');
offerMapping.set('person_a23dcf50-6cb0-468a-8be3-c6a11d21889a', "has-offer");
offerMapping.set('person_721ffd83-a84e-45fe-a658-720b332757ca', 'offer-accepted');
offerMapping.set('person_75aee078-5216-4319-8f89-30ba33c2817c', 'no offer');
offerMapping.set('123', "no-offer");

export { businessIdMapping, userToIdMapping, offerMapping };
