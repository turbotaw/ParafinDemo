async function fundProject(business_id: string) {
    const url = "https://api.parafin.com/v1/sandbox/fund_capital_product";
  
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
        body: JSON.stringify({ business_id: business_id }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log(data); 
  

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
export { fundProject };