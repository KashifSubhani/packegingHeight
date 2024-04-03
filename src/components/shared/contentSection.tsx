/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { getImg } from "@/services/descriptionService";
import { PortableText } from "@portabletext/react";

export const ContentSection = (props: any) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  const [details, setDetails] = useState<any>([]);
  useEffect(() => {
    if (
      props.contentData &&
      props.contentData.contentDetails &&
      props.contentData.contentDetails.length > 0
    ) {
      setDetails(props.contentData.contentDetails);
    }
  }, [props.contentData]);

  const block = {
    h1: ({ children }: any) => (
      <h1 className="text-3xl fw_600 mb-2 mt-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl fw_600 mb-2 mt-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl fw_600 mb-2 mt-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg fw_600 mb-2 mt-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base fw_600 mb-2 mt-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm fw_600 mb-2 mt-4">{children}</h6>
    ),
  };

  return (
    <Container maxWidth={"lg"}>
      <div style={{ background: "#F1F8F1" }}>
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 px-3 sm:px-4 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14 xl:px-14">
          <div className="scrollDiv h-80 overflow-y-auto pl-3 md:pl-5 lg:h-96">
            <div className="scrollItem">
              <PortableText value={details} components={{ block }} />
            </div>
          </div>
          <div
            className={`mx-auto flex rounded-md overflow-hidden ${
              matches2 ? "h-full" : "h-80 lg:h-96"
            } md:mx-0 `}
            style={{
              width: matches ? (matches2 ? "100%" : "20rem") : "24rem",
              minWidth: matches ? (matches2 ? "100%" : "20rem") : "24rem",
            }}
          >
            {props.contentData && props.contentData.contentImage && (
              <img
                src={getImg(props.contentData.contentImage).url}
                alt={getImg(props.contentData.contentImage).alt}
                className="w-full h-full object-contain object-center"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
