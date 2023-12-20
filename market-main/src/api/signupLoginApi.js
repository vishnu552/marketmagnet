import axios from 'axios';

export const SignUp = async (req) => {
  try {
    const res = await axios.post("http://localhost:4000/api/v1/auth/signup", req);
    return res;
  } catch (error) {
    console.error("Error in SignUp:", error);
    throw error;
  }
};
