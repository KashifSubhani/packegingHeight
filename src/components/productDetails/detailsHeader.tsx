import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import { QouteForm3 } from "./subcomponents/qouteForm3";
import { ImagesCarousel } from "./subcomponents/imagesCarousel";

const DetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:1100px)");

  return (
    <Container maxWidth={"lg"}>
      <div
        className={`grid ${
          matches ? "grid-cols-11" : "grid-cols-12"
        } gap-y-10 py-10 md:gap-x-10`}
      >
        <div className="col-span-11 md:col-span-6">
          <div className="block md:hidden mb-8">
            <h1 className="text-3xl lg:text-4xl fw_600">
              {props.product.name}
            </h1>
            <p className="text-sm mb-4 mt-3 three_lines_elipsis">
              {props.product.shortDescription}
            </p>
          </div>
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
          className={`${
            matches ? "col-span-11 md:col-span-5" : "col-span-6"
          } flex items-end`}
        >
          <div className="w-full">
            <div className="hidden md:block">
              <h1 className="text-3xl lg:text-4xl fw_600 mb-3">
                {props.product.name}
              </h1>
              <p className="text-sm big_three_lines_elipsis">
                {props.product.shortDescription}
              </p>
            </div>
            <h2 className="text-xl fw_600 mt-8 text-center md:text-left">
              Get Custom Qoute
            </h2>
            <QouteForm3 />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsHeader;
