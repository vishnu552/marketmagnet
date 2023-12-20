import React from "react";

function Why() {
  return (
    <div className="w-full m-20">
      <h1 className="text-5xl text-[#465a65] text-bold ml-16 mb-8">Our Team</h1>
      <div className="w-full">
        <ul className="flex items-center justify-around w-4/5">
          <li>
            <h2 className="text-2xl">Prakash Sharma</h2>
            <p className="text-xl text-blue-600">
              Founder &amp; Chief Executive Officer
            </p>
          </li>
          <li>
            <h2 className="text-2xl">Rakesh Shankar</h2>
            <p className="text-xl text-blue-600">Chief Business Officer</p>
          </li>
          <li>
            <h2 className="text-2xl">Surendra Kumar</h2>
            <p className="text-xl text-blue-600">Chief Marketing Officer</p>
          </li>
          <li>
            <h2 className="text-2xl">Vikash K Naik</h2>
            <p className="text-xl text-blue-600">Chief Sales Officer</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Why;
