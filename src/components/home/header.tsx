import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import headerImg1 from "../../static/headerImg1.png";
import Link from "next/link";

export const Header = () => {
  const matches = useMediaQuery("(max-width:870px)");
  return (
    <div className="py-5 sm:py-10">
      <Container maxWidth={"lg"}>
        <div
          className={`rounded-lg ${matches ? "px-4 sm:px-8" : "px-12 xl:px-20"
            } ${matches ? "py-6 sm:py-10" : "py-16"}`}
          style={{ background: "#F1F8F1" }}
        >
          <div className="flex flex-col-reverse gap-y-6 sm:grid sm:grid-cols-12">
            <div className="col-span-6">
              <h1 className="fw_600 text-2xl leading-tight md:text-3xl ">
                Ready To Own Custom Boxes
                <br className={matches ? "hidden" : "block"} /> & Packaging You Wished For!
              </h1>
              <p className={`text-sm ${matches ? "mt-6" : "mt-10 xl:mt-14"}`}>
                Packaging Height is the ultimate destination for top-notch{" "}
                <br className="hidden xl:block" />
                custom packaging solutions for every brand.
              </p>
              <div
                className={`flex flex-wrap sm:flex-nowrap items-center gap-y-3 gap-x-3 lg:gap-x-5 ${matches ? "mt-6" : "mt-10 xl:mt-14"
                  }`}
              >
                <Link
                  href="/request-quote"
                  className={`text-xs fw_600 greenBg text-white whitespace-nowrap bg-transparent greenBorder py-2 lg:py-3 w-48 sm:w-max sm:px-5 lg:px-8 buttonBorderRadius`}
                >
                  Request a Quote
                </Link>
                <Link
                  href="/all-categories"
                  className="fw_600 greenText primaryShadow buttonBorderRadius w-48 whitespace-nowrap border border-white bg-white py-2 text-xs sm:w-max sm:px-5 lg:py-3 lg:px-8"
                >
                  Choose Packaging Style
                </Link>
              </div>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:justify-end">
              <Image src={headerImg1} alt="headerImg1" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
