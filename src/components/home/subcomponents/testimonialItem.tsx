import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ReviewUser } from "./reviewUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const TestimonialItem = ({dataSet, key}:any) => {
    const matches = useMediaQuery("(max-width:640px)");
    const [tab, setTab] = useState(dataSet[0].reviewerName);
    const getReview: any = (dataSet: any) => {
      return dataSet.find((d: any) => d.reviewerName === tab);
    };
  return (
    <div
      key={key}
      className="hidden grid-cols-12 gap-y-14 sm:grid sm:gap-x-10 sm:gap-y-0 lg:gap-x-20 p-8 sm:py-0 md:px-14"
      style={{ height: matches ? "max-content" : "30rem" }}
    >
      <div className="col-span-12 flex items-center justify-end sm:col-span-6">
        <div className="flex w-full flex-col gap-y-6 md:w-max">
          {dataSet.map((d: any, ind: any) => (
            <ReviewUser user={d} setTab={setTab} tab={tab} key={ind + 1} />
          ))}
        </div>
      </div>
      {getReview(dataSet) && (
        <div className="col-span-12 flex items-center sm:col-span-6">
          <div className="relative w-80 py-10">
            <p
              className="absolute top-0 left-0 mb-0 p-0 leading-10"
              style={{ fontSize: "8rem" }}
            >
              “
            </p>
            <p className="fw_600 text-sm">{getReview(dataSet).title}</p>
            <div
              className="mt-2 flex items-center gap-x-1"
              style={{ fontSize: "14px" }}
            >
              <FontAwesomeIcon
                icon={faStar}
                className={
                  getReview(dataSet).rating < 1 ? "" : "text-yellow-500"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  getReview(dataSet).rating < 2 ? "" : "text-yellow-500"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  getReview(dataSet).rating < 3 ? "" : "text-yellow-500"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  getReview(dataSet).rating < 4 ? "" : "text-yellow-500"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  getReview(dataSet).rating < 5 ? "" : "text-yellow-500"
                }
              />
            </div>
            <p className="mt-8 text-xs">{getReview(dataSet).review}</p>
            <p
              className="absolute -bottom-12 right-0 mb-0 p-0 leading-3"
              style={{ fontSize: "8rem" }}
            >
              ”
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
