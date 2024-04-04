import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import { QouteForm3 } from "./subcomponents/qouteForm3";
import { ImagesCarousel } from "./subcomponents/imagesCarousel";

const DetailsHeader = (props: any) => {
  const matches = useMediaQuery("(max-width:1100px)");

  return (
    <Container maxWidth={"lg"}>
      <div
        className={`flex flex-col-reverse md:grid ${
          matches ? "grid-cols-11" : "grid-cols-12"
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
              <h2 className="text-xl fw_600 mt-8 text-center md:text-left">
                Get Custom Quote
              </h2>
              <QouteForm3 productName={props.product.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <h2 className="text-xl fw_600 mt-8 text-center md:text-left">
          Get Custom Quote
        </h2>
        <QouteForm3 productName={props.product.name} />
      </div>
    </Container>
  );
};

export default DetailsHeader;
