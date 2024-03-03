/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from "@mui/material";
import { createElement, useEffect, useState } from "react";
import { getImg } from "@/services/descriptionService";
import BlockContent from "@sanity/block-content-to-html";

export const ContentSection = (props: any) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (
      props.contentData &&
      props.contentData.contentDetails &&
      props.contentData.contentDetails.length > 0
    ) {
      setDetails(props.contentData.contentDetails);
    }
  }, [props.contentData]);

  return (
    <Container maxWidth={"lg"}>
      <div style={{ background: "#F1F8F1" }}>
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 px-3 sm:px-4 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14 xl:px-14">
          <div className="scrollDiv h-80 overflow-y-auto pl-3 md:pl-5 lg:h-96">
            <div className="scrollItem">
              <div
                dangerouslySetInnerHTML={{
                  __html: BlockContent({
                    blocks: details,
                    className: "flex flex-col gap-y-3",
                  }),
                }}
              />
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
            {props.contentData &&
            props.contentData.contentImage &&
            props.contentData.contentImage.realImg ? (
              <img
                src={props.contentData.contentImage.realImg}
                alt={props.contentData.contentImage.alt}
              />
            ) : (
              props.contentData &&
              props.contentData.contentImage && (
                <img
                  src={getImg(props.contentData.contentImage).url}
                  alt={getImg(props.contentData.contentImage).alt}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
