import { useState, useEffect, useContext } from "react";
import { redeemAuthToken } from './tokenManager';
import UserContext from '../main/UserContext';

export function useToken() {
  const [token, setToken] = useState(null);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (!userContext) {
      console.error('UserContext is undefined');
      return;
    }

    const { userId } = userContext;

    async function fetchToken() {
      if (userId !== null) {
        try {
          const result = await redeemAuthToken(userId);
          if (result !== undefined) {
            setToken(result.bearer_token);
          }
        } catch (error) {
          console.error('Error fetching token: ', error);
        }
      } else {
        console.error('userId is null');
      }
    }

    fetchToken();
  }, [userContext]);
  return token;
}