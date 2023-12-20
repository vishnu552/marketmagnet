import { useState } from "react";
import { properties } from "./properties";
import { useParams } from "react-router-dom";
import Button from "./button";
function Insider() {
  const { id } = useParams();
  const value = properties.find((pro) => id == pro.id);
  return (
    <div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src={value.subImgs[0].img1}
          alt="architecture"
        />
        <img src={value.subImgs[0].img2} alt="architecture" />
        <img src={value.subImgs[0].img3} />
        <img src={value.subImgs[0].img4} alt="architecture" />
        <img
          src="https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/151/images/2190/2400px_main_tq61PpRWn6ufEknHv2CZjfzoKmLeWWlsgLenrbKU.jpeg"
          alt="architecture"
        />
      </div>
      <div className="w-full flex justify-center mt-[-50px]">
        <div className="w-[80%] bg-white rounded-2xl aif_1 h-[110vh] insider_father">
          <div className="text-center my-6">
            <h1 className="text-[40px] font-semibold text-gray-800">
              {value.text}
            </h1>
          </div>
          <div className="">
            <div className="text-center">
              <h2 className="text-[25px] text-gray-600 tracking-normal">
                Properity price
              </h2>
              <div>
                <h2 className="text-[#41ce8e] text-[23px] tracking-wide">
                  {value.amount} RS
                </h2>
              </div>

              <div className="flex justify-center mt-8 lg:justify-center">
                <Button text={"Enroll Now"} />
              </div>
            </div>

            <div className="w-full flex justify-center my-10">
              <hr className="w-[80%]"></hr>
            </div>

            <div className="flex flex-col mx-6">
              <div className="flex gap-5 my-3">
                <svg width="32" height="32" viewBox="0 0 66 66" fill="none">
                  <path
                    fill="#5B9D3B"
                    d="M63.15405,21.6983C58.70056,9.06049,46.66138,0,32.5,0c-3.37939,0-6.63782,0.5166-9.70184,1.47375V21.6983H63.15405z"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    d="M22.79816,21.6983v21.68567h40.32806C64.33588,39.98053,65,36.31842,65,32.5c0-3.7879-0.65472-7.42133-1.84595-10.8017H22.79816z"
                  ></path>
                  <path
                    fill="#121C30"
                    d="M22.79816,63.52625C25.86218,64.4834,29.12061,65,32.5,65c14.13086,0,26.14966-9.02087,30.62622-21.61603H22.79816V63.52625z"
                  ></path>
                  <path
                    fill="#B81942"
                    d="M22.79816,21.6983V1.47375C9.58795,5.60034,0,17.93011,0,32.5s9.58795,26.89966,22.79816,31.02625V43.38397V21.6983z"
                  ></path>
                </svg>

                <div>
                  <h1 className="text-[16px] text-bold">
                    Dubai, United Arab Emirates
                  </h1>
                  <p className="text-[14px] text-[#5e6475]">
                    A mature real estate market with a high return on investment
                  </p>
                </div>
              </div>

              <div className="flex gap-5 my-3">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1dlsnza w-14"
                  aria-label="house-rented"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g>
                      <path d="M9 20V15C9 14.4477 9.44772 14 10 14H12 M18.5 16.45C18.4724 16.45 18.45 16.4724 18.45 16.5C18.45 16.5276 18.4724 16.55 18.5 16.55C18.5276 16.55 18.55 16.5276 18.55 16.5C18.55 16.4724 18.5276 16.45 18.5 16.45V16.45 M15.1976 17.615L13.2922 19.5243C13.1051 19.7118 13 19.9658 13 20.2306V21C13 21.5523 13.4477 22 14 22H14.7711C15.0367 22 15.2914 21.8944 15.479 21.7064L17.3814 19.8001 M3 10.5803L10.6984 3.9815C11.4474 3.3395 12.5526 3.3395 13.3016 3.9815L21 10.5803 M10 20H3 M15.6235 5.97182V3.75C15.6235 3.33579 15.9593 3 16.3735 3H18.9644C19.3787 3 19.7144 3.33579 19.7144 3.75V9.47839 M4.2854 9.47852V20.0001 M15.1985 17.6159C15.0715 17.2574 15.0045 16.8804 15 16.5001C15 15.0845 15.8527 13.8083 17.1606 13.2665C18.4685 12.7248 19.9739 13.0242 20.9749 14.0252C21.9759 15.0262 22.2753 16.5316 21.7336 17.8395C21.1918 19.1474 19.9156 20.0001 18.5 20.0001C18.119 19.9956 17.7413 19.9284 17.3821 19.8009"></path>
                    </g>
                  </g>
                </svg>

                <div>
                  <h1 className="text-[16px] text-bold">Rented</h1>
                  <p className="text-[14px] text-[#5e6475]">
                    Currently occupied and professionally managed by our team
                  </p>
                </div>
              </div>

              <div className="flex gap-5 my-3">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1dlsnza w-14"
                  aria-label="shield-check-mark-3"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g>
                      <path d="M3.50098 10.767C3.50098 15.1925 6.24818 19.1532 10.3933 20.7036L10.4233 20.7148C11.4408 21.0954 12.5617 21.095 13.579 20.7138L13.6033 20.7047C17.7521 19.1499 20.501 15.1842 20.501 10.7536V7.03023C20.501 6.15536 19.9323 5.38202 19.0973 5.12118L12.5973 3.09095C12.209 2.96968 11.793 2.96968 11.4047 3.09095L4.90472 5.12112C4.06962 5.38195 3.50098 6.15529 3.50098 7.03017V10.767Z"></path>
                      <path
                        d="M11.8114 15.8803C11.3691 15.8803 10.9486 15.8006 10.5499 15.6411C10.1584 15.4743 9.82125 15.2423 9.5385 14.9451C9.263 14.6406 9.0745 14.2817 8.973 13.8684L10.2671 13.4117C10.3976 13.7814 10.597 14.0642 10.8652 14.2599C11.1335 14.4484 11.4489 14.5427 11.8114 14.5427C12.1014 14.5427 12.3515 14.4883 12.5618 14.3796C12.7793 14.2708 12.9496 14.115 13.0729 13.912C13.1961 13.7017 13.2578 13.4552 13.2578 13.1724C13.2578 12.8897 13.1961 12.6504 13.0729 12.4547C12.9569 12.2517 12.7901 12.0958 12.5726 11.9871C12.3551 11.8783 12.0978 11.8239 11.8005 11.8239C11.6627 11.8239 11.5177 11.8384 11.3655 11.8674C11.2205 11.8964 11.09 11.9399 10.974 11.9979L10.6369 11.2911L12.7358 8.89857H9.42975V7.64795H14.3996V8.81157L12.2899 11.2802L12.3116 10.7256C12.7974 10.7328 13.2215 10.8379 13.584 11.0409C13.9465 11.2439 14.2293 11.5231 14.4323 11.8783C14.6353 12.2336 14.7368 12.6504 14.7368 13.1289C14.7368 13.6509 14.6099 14.1222 14.3561 14.5427C14.1024 14.9559 13.7544 15.2822 13.3121 15.5215C12.8699 15.7607 12.3696 15.8803 11.8114 15.8803Z"
                        fill="#121C30"
                        stroke="none"
                      ></path>
                    </g>
                  </g>
                </svg>

                <div>
                  <h1 className="text-[16px] text-bold">
                    3 years rental guarantee
                  </h1>
                  <p className="text-[14px] text-[#5e6475]">
                    Stake guarantees you at least 3 years of rental income on
                    this property
                  </p>
                </div>
              </div>

              <div className="flex gap-5 my-3">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1dlsnza w-14"
                  aria-label="money"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g>
                      <path d="M13.999 5C14 3.895 11.76 3 9 3C6.24 3 4.002 3.896 4 5C4 6.105 6.238 7 9 7C11.762 7 14 6.105 14 5 M14 5V12.76 M4.00098 9C4.00098 10.105 6.23898 11 9.00098 11C11.763 11 14.001 10.105 14.001 9 M19.6822 13.318C21.4392 15.075 21.4392 17.925 19.6822 19.682C17.9252 21.439 15.0752 21.439 13.3182 19.682C11.5612 17.925 11.5612 15.075 13.3182 13.318C15.0752 11.561 17.9252 11.561 19.6822 13.318 M12.505 14.425C11.603 14.78 10.366 15 8.99998 15C6.23898 15 4.00098 14.105 4.00098 13 M12.445 18.444C11.548 18.787 10.339 19 9 19C6.239 19 4.001 18.105 4 17V5"></path>
                    </g>
                  </g>
                </svg>

                <div>
                  <h1 className="text-[16px] text-bold">
                    Current rent is AED 5,688 per month
                  </h1>
                  <p className="text-[14px] text-[#5e6475]">
                    Distributed monthly among all investors after standard
                    charges and fees
                  </p>
                </div>
              </div>

              <div className="flex gap-5 my-3">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1dlsnza w-14"
                  aria-label="graph-up"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g>
                      <path d="M5.00098 15.8891L10.072 10.8181C10.4629 10.4271 11.0959 10.4271 11.4859 10.8181L13.627 12.9591C14.0179 13.3501 14.6509 13.3501 15.0409 12.9591L21.001 7.00012"></path>
                      <path d="M18.334 7.00012H21.001V9.66712"></path>
                      <path d="M20.9998 20.9292H1.9248V3.22119"></path>
                    </g>
                  </g>
                </svg>

                <div>
                  <h1 className="text-[16px] text-bold">
                    5.83% annual gross yield
                  </h1>
                  <p className="text-[14px] text-[#5e6475]">
                    With a net yield of 5.06% and a price per square foot of AED
                    2,468
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center my-10">
              <hr className="w-[80%]"></hr>
            </div>

            <div>
              <h1 className="text-[20px] my-5 mx-6">Property Overview</h1>
              <div>
                <p className="text-[14px] text-[#5e6475] mx-6">
                  {value.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Insider;
