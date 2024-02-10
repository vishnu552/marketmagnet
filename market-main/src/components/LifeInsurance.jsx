import InsuranceLogo from "./InsuranceLogo";
function LifeInsurance() {
  return (
    <div className=" bg-gray-50 py-10 ">
      <div className="h-64 w-screen pt-20 bg-[#3a41bd]">
        <h1 className="text-white text-6xl mt-20 ml-20">Life Insurance</h1>
      </div>
      <div className=" mt-16 mx-20">
        <h1 className="text-6xl">Overview of Life Insurance</h1>
        <p className="text-2xl my-4">
          Life insurance is a contract between an insurance company and an
          individual or group, in which the insurance company agrees to pay a
          sum of money to the named beneficiaries of the policy upon the death
          of the insured. In exchange, the policyholder pays a regular premium
          to the insurance company.
        </p>
        <p className="text-2xl ">
          Under the
          <span className="font-semibold">Life Insurance category</span>, we
          have 4 main types of insurance, which are:
        </p>
        <div>
          <ul className="ml-8 list-disc">
            <li className="text-2xl my-4">
              <span className="font-semibold">Term Life Insurance:</span> This
              is the most basic type of life insurance. It provides financial
              help to your beneficiaries should the worst happen during the term
              of the policy.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Endowment Plans:</span>
              These plans offer a combination of life insurance and savings. You
              will receive a lump sum amount upon maturity of the policy.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold"> Whole Life Insurance:</span>
              This type of insurance provides lifelong coverage and builds up a
              cash value over time.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">
                Unit-Linked Insurance Plans (ULIPs):
              </span>
              These plans combine life insurance with investment options. You
              can choose how your premiums are invested, and the value of your
              policy will fluctuate depending on the performance of the
              underlying investments.
            </li>
          </ul>
        </div>
      </div>
      <div className=" mt-16 mx-20">
        <h1 className="text-3xl">
          5 Reasons Why you should Consider Life Insurance
        </h1>
        <div>
          <ol className="ml-8 list-decimal">
            <li className="text-2xl my-4">
              <span className="font-semibold">
                Providing Financial Security for loved ones:
              </span>{" "}
              Life insurance can help to replace the financial income that the
              family would lose if the worst was to happen. This can be
              especially important if one has young children or dependents who
              rely on one’s income.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Paying Off Debts:</span>
              If one has debts, such as a home loan or student loans, life
              insurance can help to ensure that the loved ones are in a position
              to pay them with the sum assured that they will receive.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Tax Benefits:</span>
              Life insurance premiums are often tax-deductible. This means that
              one can reduce the taxable income by the amount of one’s life
              insurance premiums.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Leaving a Legacy:</span>
              Life insurance can be used to leave a legacy for loved ones, such
              as a down payment on a house or a gift to their favorite charity.
            </li>
            <li className="text-2xl my-4">
              <span className="font-semibold">Peace of Mind:</span>
              One can rest easy knowing that, should the worst was to happen
              then at the least family is taken care of from a financial
              perspective.
            </li>
          </ol>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-4xl my-16 ml-20">Our Life Insurance Partners</h1>
        <InsuranceLogo />
      </div>
    </div>
  );
}
export default LifeInsurance;
