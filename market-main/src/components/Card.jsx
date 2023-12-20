
import PropTypes from 'prop-types';
function Card({ property }) {
  return (
    <div data-aos="fade-up" className="">
      <div className=" m-8 w-[350px] bg-gray-200 rounded-2xl pb-4  transition duration-500 hover:scale-90">
        {/* <div className="">
          <img
            src={property.img}
            className="rounded-t-md w-[400px] h-[200px]  "
          />
        </div> */}
        <div className="m-4 p-5">
          <h2 className="text-4xl font-bold">{property.CompanyName}</h2>

          <p className="text-2xl text-cyan-600 ">{property.CompanyTag}</p>
          <p className="text-xl text-cyan-600 mt-8">{property.Objective}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  property: PropTypes.shape({
    CompanyName: PropTypes.string.isRequired,
    CompanyTag: PropTypes.string.isRequired,
    Objective: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if needed
  }).isRequired,
};

export default Card;
