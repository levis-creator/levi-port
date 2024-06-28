export const get_data = async (endpoint: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
