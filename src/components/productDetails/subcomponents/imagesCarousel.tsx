import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { getImg } from "@/services/descriptionService";

export const ImagesCarousel = (props: any) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const [myImg, setMyImg] = useState(props.images[0]);
  useEffect(() => {
    if (props.images[0]) {
      setMyImg(props.images[0]);
    }
  }, [props.images]);
  return (
    <div
      className="flex flex-col-reverse lg:flex-row gap-y-2 lg:gap-y-0 gap-x-0 lg:gap-x-2 items-center w-full"
      style={{ height: "470px" }}
    >
      <div
        style={{
          width: matches ? "100%" : "7rem",
          minWidth: matches ? "100%" : "7rem",
          maxWidth: matches ? "100%" : "7rem",
        }}
        className="flex flex-row lg:flex-col gap-x-2 lg:gap-y-2 lg:h-full"
      >
        {props.images.map((img: any, index: any) => (
          <div
            key={index + 1}
            className={`h-24 lg:h-1/4  w-1/4 lg:w-full flex items-center justify-center cursor-pointer rounded-md overflow-hidden border-2 ${
              img === myImg
                ? "border-green-400"
                : "border-zinc-200 border-opacity-50"
            }`}
            onClick={() => setMyImg(img)}
          >
            <img src={getImg(img).url} alt={getImg(img).alt} />
          </div>
        ))}
      </div>
      <div className="w-full h-full p-1">
        <div
          className="h-full w-full rounded-md bg-center bg-contain "
          style={{ backgroundImage: `url(${getImg(myImg).url})` }}
        ></div>
      </div>
    </div>
  );
};
