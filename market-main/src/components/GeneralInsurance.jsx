import InsuranceLogo from "./InsuranceLogo";
function GenralInsurance() {
  return (
    <div className=" bg-gray-50 py-10 ">
      <div className="h-64 w-screen pt-20 bg-[#3a41bd]">
        <h1 className="text-white text-6xl mt-20 ml-20">General Insurance</h1>
      </div>
      <div className=" mt-16 mx-20">
        <h1 className="text-4xl">Overview of General Insurance</h1>
        <p className="text-2xl my-4">
          General Insurance is a type of insurance that provides financial protection for various risks and losses other than those related to life coverage. It typically covers risks that can lead to financial losses when the underlying assets are damaged or destroyed. It also covers specific events like foreign travel etc. Examples of general insurance are – Motor Insurance, Fire Insurance, Theft Insurance etc.
        </p>


      </div>
      <div className=" mt-16 mx-20">
        <h1 className="text-3xl">
          5 Reasons Why you should Consider General Insurance
        </h1>
        <div>
          <ol className="ml-8 list-decimal">
            <li className="text-2xl my-4">
              <span className="font-semibold">
                Financial Protection:
              </span>{" "}
              General insurance provides financial protection in the event of unexpected events, such as accidents, theft, or natural disasters.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Peace of Mind:</span>
              Having insurance coverage can give you peace of mind, knowing that you’re prepared for unforeseen circumstances
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Legal Requirements: </span>
              Some types of insurance, like motor insurance, are mandatory in India for all registered vehicles.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Property Protection: </span>
              Home insurance protects your property from damage caused by fire, burglary, or natural disasters.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Business Protection:</span>
              Business insurance safeguards your company against risks, including liability, property damage, and business interruption.
            </li>
          </ol>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-4xl my-16 ml-20">Our General Insurance Partners</h1>
        <InsuranceLogo />
      </div>
    </div>
  );
}
export default GenralInsurance;
