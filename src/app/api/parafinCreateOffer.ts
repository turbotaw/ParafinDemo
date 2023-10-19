async function createOffer(business_id: string, product_type: string) {
    const url = "https://api.parafin.com/v1/sandbox/capital_product_offer";
  
    const client_id = process.env.REACT_APP_MY_CLIENT_ID;
    const secret = process.env.REACT_APP_MY_API_KEY;
    const credentials = btoa(client_id + ':' + secret);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + credentials,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ business_id: business_id, product_type: product_type }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log(data); 
  
      // Now you have the auth_token and bearer_token
      const { offer_url } = data;
  
      return { offer_url };  // Return the tokens
  
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
export { createOffer };