const apiUrl = 'https://f2cdr7zot5.execute-api.us-east-1.amazonaws.com/default/pull_all_draftkings_data';

// Fetch data using native Fetch API
export const getDraftKingsData = async () => {
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