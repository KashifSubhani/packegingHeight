/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container } from "@mui/material";
import { MobileTestimonials } from "./subcomponents/mobileTestimonials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TestimonialItem } from "./subcomponents/testimonialItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Testimonials = (props: any) => {
  return (
    <Container maxWidth={"lg"}>
      {props.testimonials && props.testimonials.length > 0 && (
        <div className="pb-10 pt-4">
          <p className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
            Testimonials
          </p>
          <div className="block sm:hidden">
            <MobileTestimonials />
          </div>
          <div
            className="mt-14 rounded-lg"
            style={{
              background: "#F1F8F1",
            }}
          >
            <Carousel responsive={responsive}>
              {props.testimonials.map((dataSet: any, index: any) => (
                <TestimonialItem dataSet={dataSet} key={index} ids={index + 1} />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </Container>
  );
};
