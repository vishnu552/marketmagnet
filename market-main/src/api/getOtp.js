import axios from "axios";

async function getOtp(email) {
  if (email) {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/sendotp",
        {
          email,
        }
      );
      alert("check your email for Otp");
    } catch (error) {
      console.log(error);
    }
  }
}
export default getOtp;
