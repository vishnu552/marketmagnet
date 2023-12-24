import InsuranceLogo from "./InsuranceLogo";
function HealthInsurance() {
    return (
        <div className=" bg-gray-50 py-10 ">
            <div className="h-64 w-screen pt-20 bg-[#3a41bd]">
                <h1 className="text-white text-6xl mt-20 ml-20">Health Insurance</h1>
            </div>
            <div className=" mt-16 mx-20">
                <h1 className="text-4xl">Overview of Health Insurance</h1>
                <p className="text-2xl my-4">
                    Health insurance is a contract with an insurance company wherein in exchange for a monthly premium, the insurance company agrees to pay for medical expenses, up to certain limits, if one gets sick or injured. There are many different health insurance plans available, so it’s important to choose one that’s right for you and your family. When choosing a plan, consider the following factors:
                </p>
                <div>
                    <ul className="ml-8 list-disc">
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Coverage:</span> T What types of medical expenses are covered by the plan?
                        </li>
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Cost:</span>
                            How much is the monthly premium? How much is the deductible?
                        </li>
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Network: </span>
                            Does the plan have a network of doctors and hospitals that you want to use?
                        </li>
                        <li className="text-2xl my-4">
                            Please ensure you go through the documents carefully before you decide which Health Insurance you would like to go for.
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" mt-16 mx-20">
                <h1 className="text-3xl">
                    5 Reasons Why you should Consider Health Insurance
                </h1>
                <div>
                    <ol className="ml-8 list-decimal">
                        <li className="text-2xl my-4">
                            <span className="font-semibold">
                            Financial protection: 
                            </span>{" "}
                            Medical care can be expensive, especially if you need hospitalization or surgery. Health insurance can help you pay for these costs without going into debt.
                        </li>
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Cover for Surgery, Costly Screenings:</span>
                            If you need surgery, your health insurance can help pay for the surgeon’s fees, the cost of anesthesia, and the cost of the hospital room and board. The Insurance policy, with the right add-on can also bear the cost of non-routine checkups like a cancer screening which are high cost.

                        </li>
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Preventive care: </span>
                            Many health insurance plans cover preventive care, such as regular annual checkups and screenings. This can help you stay healthy and avoid costly medical problems down the road.
                        </li>
                        <li className="text-2xl my-4">
                            <span className="font-semibold">Peace of mind: </span>
                            Knowing that you have health insurance can give you peace of mind knowing that you and your family will be financially protected if you need medical care.

                        </li>
                    </ol>
                </div>
            </div>
            <div className="my-20">
                <h1 className="text-4xl my-16 ml-20">Our Health Insurance Partners</h1>
                <InsuranceLogo />
            </div>
        </div>
    );
}
export default HealthInsurance;
