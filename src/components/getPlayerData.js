const apiUrl = 'https://f2cdr7zot5.execute-api.us-east-1.amazonaws.com/default/NFL-Data-pull-to-front';

// Fetch data using native Fetch API
export const getPlayerData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    throw error; // Propagate the error to be handled in the component
  }
};