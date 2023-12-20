import { useState } from "react";
import img3 from "../assets/assets/Ajit_kumar.jpeg";
import img2 from "../assets/assets/akhilesh.jpg";
import img1 from "../assets/assets/sudhir1.jpg";
import img4 from "../assets/assets/Suraj.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function UserReviews() {
  const [index, setIndex] = useState(0);
  const comments = [
    {
      id: 1,
      name: "Sudhir Kumar",
      comment:
        "Being a predominantly online user seeking platforms to invest, I stumbled upon Finizon and it has been an absolute game-changer for me. The payment co...",
      img: img1,
    },
    {
      id: 2,
      name: "Akhilesh Kumar",
      comment:
        "The Market Magnet investments platform is very customer centric. I appreciate the detailed online portfolio updates and the ease of transactions",
      img: img2,
    },
    {
      id: 3,
      name: "Ajit Kumar",
      comment:
        "Such a wide range of insurance products, I compare the quotes and choose the best fit for my customers. My customers are happy to get quick policies and I am happy to get timely payments.",
      img: img3,
    },
    {
      id: 4,
      name: "Suraj",
      comment:
        "I am able to sell insurance policies without any tedious paperwork. It saves time and also eases the whole transaction process.",
      img: img4,
    },
  ];
  const { name, img, comment } = comments[index];
  const prevComment = () => {
    setIndex(() => {
      const newIndex = (index - 1 + comments.length) % comments.length;
      return newIndex;
    });
  };
  const nextComment = () => {
    setIndex(() => {
      const newIndex = (index + 1) % comments.length;
      return newIndex;
    });
  };
  return (
    <div className="w-full flex justify-center items-center" data-aos="fade-up">
      <button className="text-5xl  hover:text-gray-500" onClick={prevComment}>
        <FaChevronLeft />
      </button>
      <div className="w-3/4 flex flex-col justify-center items-center mt-40">
        <img src={img} alt="profile" className="w-48 h-48 rounded-full" />
        <h2 className="text-gray-800 text-5xl my-4">{name}</h2>
        <p className="text-3xl text-gray-600 px-4 text-center">{comment}</p>
      </div>
      <button className="text-5xl  hover:text-gray-500" onClick={nextComment}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default UserReviews;
