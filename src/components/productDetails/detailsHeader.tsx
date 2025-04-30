import { Container, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { QouteForm3 } from "./subcomponents/qouteForm3";
import { ImagesCarousel } from "./subcomponents/imagesCarousel";
import { StandarSize } from "./subcomponents/standardSizeForm";

const DetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:1100px)");
  const [activeTab, setActiveTab] = useState("standard");
  const tabs = [
    {
      id: "standard",
      title: "Standard Sizes",
      content: (
        <div>
          <p className="text-lg fw_600 mt-8 text-center tracking-wide md:text-left greenBg text-white p-4">
            Standard Sizes
          </p>
          <StandarSize productName={props.product.name} />
        </div>
      ),
    },
    {
      id: "quote",
      title: "Get Custom Quote",
      content: (
        <div>
          <p className="text-lg fw_600 mt-8 text-center tracking-wide md:text-left greenBg text-white p-4">
            Get Custom Quote
          </p>
          <QouteForm3 productName={props.product.name} />
        </div>
      ),
    },
  ];
  return (
    <Container maxWidth={"lg"}>
      <div
        className={`flex flex-col-reverse md:grid ${matches ? "grid-cols-11" : "grid-cols-12"
          } gap-y-5 pb-10 pt-6 sm:py-10 md:gap-x-10`}
      >
        <div className="col-span-6">
          {props.product &&
            props.product.images &&
            props.product.images.length > 0 && (
              <ImagesCarousel
                images={props.product.images.filter(
                  (_d: any, ind: any) => ind < 4
                )}
              />
            )}
        </div>
        <div
          className={`${matches ? "col-span-5" : "col-span-6"} flex items-end`}
        >
          <div className="w-full">
            <div>
              <h1 className="text-3xl lg:text-4xl fw_600 mb-3">
                {props.product.name}
              </h1>
              <p className="text-sm big_three_lines_elipsis">
                {props.product.shortDescription}
              </p>
            </div>
            <div className="hidden md:block">
              {/* Tab Headers */}
              <ul className="border-b border-black/15 flex items-center gap-8">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`md:text-base text-sm fw_600 mt-8 text-center md:text-left py-5 border-b-2 cursor-pointer ${activeTab === tab.id
                      ? "text-[#606062] border-black"
                      : "text-[#606062]/60 border-transparent hover:text-[#606062] hover:border-black"
                      }`}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id}>
                      {tab.content}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        {/* Tab Headers */}
        <ul className="border-b border-black/15 flex items-center gap-8">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`md:text-base text-sm fw_600 mt-8 text-center md:text-left py-5 border-b-2 cursor-pointer ${activeTab === tab.id
                ? "text-[#606062] border-black"
                : "text-[#606062]/60 border-transparent hover:text-[#606062] hover:border-black"
                }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </Container>
  );
};

export default DetailsHeader;
