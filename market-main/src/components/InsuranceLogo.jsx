import React from "react";

function InsuranceLogo() {
  const insuranceLogo = [
    {
      alt: "bajaj allianzlife",
      src: "https://www.bajajallianzlife.com/content/dam/balic/index/bajaj-logo.png",
    },
    {
      src: "https://www.iciciprulife.com/content/icici-prudential-life-insurance/_jcr_content/headerpar/header_sightly/navHeader.img.png/1686333582909.png",
      alt: "iciciprulife",
    },
    {
      src: "https://www.tataaia.com/content/dam/tataaia/logo.png",
      alt: "tataaia",
    },
    {
      src: "https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/HDFC_logo.svg",
      alt: "hdfclife",
    },
    {
      src: "https://www.bhartiaxa.com/sites/default/files/2022-08/bharti-axa-logo.svg?w=384&q=75",
      alt: "bhartiaxa",
    },
    {
      src: "https://www.maxlifeinsurance.com/static-page/assets/homepage/maxlogo.svg",
      alt: "maxlifeinsurance",
    },
    {
      src: "https://www.pnbmetlife.com/content/dam/pnb-metlife/images/pnb-metlife-svg.svg",
      alt: "pnbmetlife",
    },
    {
      src: "https://licindia.in/o/liferaytheme-theme/images/logo.png",
      alt: "LIC",
    },
  ];
  return (
    <div className="w-full grid grid-cols-4 gap-12 comp-grid mx-20">
      {insuranceLogo.map((logo) => (
        <img src={logo.src} alt={logo.alt} className=" w-52 object-contain" />
      ))}
    </div>
  );
}

export default InsuranceLogo;
