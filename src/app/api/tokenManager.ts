async function redeemAuthToken(personId: string) {
    const url = "https://api.parafin.com/v1/auth/redeem_token";
  
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
        body: JSON.stringify({ person_id: personId }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);  // Log the response data to the console
  
      // Now you have the auth_token and bearer_token
      const { auth_token, bearer_token } = data;
  
      return { auth_token, bearer_token };  // Return the tokens
  
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
export { redeemAuthToken };