/* eslint-disable prettier/prettier */
import { Container } from "@mui/material";
import Image from "next/image";

import method1 from "../../../static/method1.svg";
import method2 from "../../../static/method2.svg";
import method3 from "../../../static/method3.svg";
import method4 from "../../../static/method4.svg";
import method5 from "../../../static/method5.svg";
import linkedin from "../../../static/linkedin.svg";
import facebook from "../../../static/facebook.svg";
import instagram from "../../../static/instagram.svg";
import twitter from "../../../static/twitter.svg";
import pinterest from "../../../static/pinterest.svg";
import copyright from "../../../static/copyright.svg";
import { Categories } from "./subcomponents/categories";

const linksData1 = [
  "Products",
  "Industries",
  "Option Library",
  "Inspiration Library",
  "Turnkey Folding Carton",
  "Digital Corrugated",
];
const linksData2 = [
  "Why PakFactory",
  "About Us",
  "Contact Us",
  "Request a quote",
  "Hours & Locations",
  "Careers",
];
const linksData3 = [
  "Why PakFactory",
  "About Us",
  "Contact Us",
  "Request a quote",
  "Hours & Locations",
  "Careers",
];

export const Footer = () => {
  return (
    <div style={{ background: "#A6A8AB" }} className="lg:px-4 xl:px-14">
      <Container maxWidth="lg">
        <div>
          <div className="border-b border-black pb-8">
            <p className="fw_600 pt-10 text-xl text-black">
              We collaborate with people and brands;
              <br className="hidden sm:block" />
              lets build something great together.
            </p>
            <div className="mt-4 flex flex-col justify-between gap-y-5 md:flex-row md:items-end lg:mt-0">
              <div>
                <p className="fw_400 text-sm text-black">Connect with us!</p>
                <div className="mt-4 flex items-center gap-x-8 text-xl text-white">
                  <Image src={linkedin} alt="linkedin" />
                  <Image src={facebook} alt="facebook" />
                  <Image src={instagram} alt="instagram" />
                  <Image src={twitter} alt="twitter" />
                  <Image src={pinterest} alt="pinterest" />
                </div>
              </div>
              <div className="ml-auto md:ml-0">
                <p className="fw_400 text-sm text-black">
                  Sign up for exclusive offers and updats!
                </p>
                <div className="mt-4 flex items-center gap-x-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-10 w-full rounded-sm border-none bg-white px-3 text-xs shadow-none outline-none sm:w-48"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-10 w-full rounded-sm border-none bg-white px-3 text-xs shadow-none outline-none sm:w-48"
                  />
                  <button className="greenBg h-10 rounded-sm px-4 text-xs text-white shadow-none outline-none sm:px-5">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-10 border-b border-black py-10 md:gap-y-0 md:gap-x-5 lg:gap-x-8">
            <div className="col-span-12 grid grid-cols-3 gap-x-5 md:col-span-6 lg:gap-x-8">
              <Categories list={linksData1} title="Solutions" />
              <Categories list={linksData2} title="Company" />
              <Categories list={linksData3} title="Resources" />
            </div>
            <div className="col-span-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-10 md:col-span-6 md:gap-x-5 lg:gap-x-8">
              <div>
                <p className="fw_600 text-base text-black">Sustainability</p>
                <p className="fw_400 mt-2 text-xs leading-5 text-black sm:mt-5 md:leading-8">
                  {" "}
                  Packaging height is pushing change for a greener tomorrow. For
                  every order, trees are planted through the National Forest
                  Foundation
                </p>
              </div>

              <div>
                <p className="fw_600 text-base text-black">Compliance</p>
                <p className="fw_400 mt-2 text-xs leading-5 text-black sm:mt-5 md:leading-8">
                  {" "}
                  Packaging height is committed to delivering manufacturing
                  excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-3 py-5 md:flex-row md:gap-y-0 md:gap-x-4">
            <div className="flex items-center gap-x-2 text-black">
              <Image src={copyright} alt={copyright} />
              <span className="text-xs text-black">
                2024 Packaging Height. All Rights Reserved
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3">
              <span className="text-xs text-black">
                SSL 100% Secure Transacyions
              </span>
              <div className="flex items-center gap-x-1">
                <Image src={method1} alt="method1" />
                <Image src={method2} alt="method1" />
                <Image src={method3} alt="method1" />
                <Image src={method4} alt="method4" />
                <Image src={method5} alt="method5" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
