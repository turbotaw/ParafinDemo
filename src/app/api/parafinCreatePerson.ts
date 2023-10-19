const createPerson = async (formData: any) => {
    const client_id = process.env.REACT_APP_MY_CLIENT_ID;
    const secret = process.env.REACT_APP_MY_API_KEY;
    const credentials = btoa(client_id + ':' + secret);
  
    try {
      const response = await fetch('https://api.parafin.com/v1/persons', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + credentials,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
      return { success: true, data };
    } catch (error) {
      console.error(error);
      return { success: false, error };
    }
  };
  
  export { createPerson };