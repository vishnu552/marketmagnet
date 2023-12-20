import axios from 'axios';



export const opportunities = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/v1/opp");
    console.log(res, "res")
    return res;
  } catch (error) {
    console.error("Error in getting opps:", error);
    throw error;
  }
};
