import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";

import steps from "../../static/steps.svg";
import { GetQouteForm1 } from "./subcomponents/getQouteForm1";

export const GetQoute = (props: any) => {
  const matches = useMediaQuery("(max-width:880px)");
  const matches2 = useMediaQuery("(max-width:1250px)");
  const matches3 = useMediaQuery("(max-width:1100px)");
  return (
    <Container maxWidth={"lg"}>
      <div className="pb-10 pt-5">
        <p className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          Request Your Quote Now!
        </p>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          Simply go to our website and give us the lowdown on your product
          specs, toss in your contact details, and if you've got a killer design
          in mind, feel free to attach it. We'll create a personalized quote.
        </p>
        <div
          className={`mt-14 grid grid-cols-11 gap-y-14 rounded-lg py-5 px-3 sm:px-5 md:gap-y-0 ${
            matches ? "gap-x-0 md:gap-x-10" : "gap-x-14"
          } md:py-10 lg:p-14 xl:grid-cols-12`}
          style={{ background: "#F1F8F1" }}
        >
          <div className="col-span-11 flex justify-end md:col-span-6">
            <GetQouteForm1 products={props.products} />
          </div>
          <div className="col-span-11 flex items-center md:col-span-5 xl:col-span-6">
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              {!matches && (
                <div className="hidden md:block">
                  <Image
                    src={steps}
                    alt="steps"
                    height={matches3 ? 1200 : matches2 ? 900 : 800}
                  />
                </div>
              )}
              <div className="flex flex-col gap-y-6">
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: "2.2rem",
                      minWidth: "2.2rem",
                      height: "2.2rem",
                    }}
                    className={`greenBg ${
                      matches ? "flex" : "hidden"
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    1
                  </div>
                  <div>
                    <p className="fw_600 mb-2 text-sm">Request A process</p>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: "#024E77" }}
                    >
                      Just spill the beans on what you need, and we'll handle
                      the rest like the pros.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: "2.2rem",
                      minWidth: "2.2rem",
                      height: "2.2rem",
                    }}
                    className={`greenBg ${
                      matches ? "flex" : "hidden"
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    2
                  </div>
                  <div>
                    <p className="fw_600 mb-2 text-sm">Choose Design</p>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: "#024E77" }}
                    >
                      Wanna flex your design skills? Go ahead and create your
                      own masterpiece. If not, then you can totally leave it to
                      our designers.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: "2.2rem",
                      minWidth: "2.2rem",
                      height: "2.2rem",
                    }}
                    className={`greenBg ${
                      matches ? "flex" : "hidden"
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    3
                  </div>
                  <div>
                    <p className="fw_600 mb-2 text-sm">Confirmation</p>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: "#024E77" }}
                    >
                      Once you've hit send on that design, sit back and relax.
                      We'll shoot you an email to confirm we've got it.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: "2.2rem",
                      minWidth: "2.2rem",
                      height: "2.2rem",
                    }}
                    className={`greenBg ${
                      matches ? "flex" : "hidden"
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    4
                  </div>
                  <div>
                    <p className="fw_600 mb-2 text-sm">Manufacturing Process</p>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: "#024E77" }}
                    >
                      With your green light, we dive straight into the
                      nitty-gritty of crafting your custom-designed boxes.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: "2.2rem",
                      minWidth: "2.2rem",
                      height: "2.2rem",
                    }}
                    className={`greenBg ${
                      matches ? "flex" : "hidden"
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    5
                  </div>
                  <div>
                    <p className="fw_600 mb-2 text-sm">Delivery</p>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: "#024E77" }}
                    >
                      Drumroll, please! Your custom packaging will be making its
                      grand entrance at your doorstep within 8-10 days after
                      we've worked our magic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
