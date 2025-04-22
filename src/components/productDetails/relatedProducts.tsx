import { Container } from "@mui/material";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

export const RelatedProducts = (props: any) => {

  return (
    props.product &&
    props.product.relatedProducts &&
    props.product.relatedProducts.length > 0 && (
      <Container maxWidth="lg">
        <div className="pb-16">
          <p className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
            Related Products
          </p>
          <div className="mt-10">
            <Carousel responsive={responsive}>
              {props.product.relatedProducts.map((data: any, index: any) => (
                <Link
                  key={index + 1}
                  href={`/${getSlug(data.slug)}`}
                  className="col-span-12 sm:col-span-6 lg:col-span-3 cursor-pointer p-4 text-[#606062]"
                >
                  <div
                    className="w-full rounded-md h-72 p-4 flex items-center justify-center overflow-hidden"
                    style={{ background: "#eaf0f5" }}
                  >
                    {data.images &&
                      data.images.length > 0 &&
                      data.images[0] && (
                        <img
                          src={getImg(data.images[0]).url}
                          alt={getImg(data.images[0]).alt}
                        />
                      )}
                  </div>
                  <p className="text-base fw_400 mt-1">{data.name}</p>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    )
  );
};
