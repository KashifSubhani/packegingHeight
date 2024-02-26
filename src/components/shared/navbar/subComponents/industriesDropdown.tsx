"use client";

import { getImg } from "@/services/descriptionService";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const IndustriesDropdown = (props:any) => {
  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = props.list.filter((_d: any, i: any) => i < 10);
    setList(arr);
  }, []);
  return (
    <div
      onMouseEnter={() => props.setShowDropdown(true)}
      onMouseLeave={() => props.setShowDropdown(false)}
      className="absolute w-full top-full left-0 right-0 bg-white z-30 rounded-lg shadow-lg px-3 sm:px-10 pb-10 pt-5"
    >
      <h2 className="fw_600 text-black text-lg">Shop By Industries</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10">
        {list &&
          list.length > 0 &&
          list.map((category: any, index: any) => (
            <div
              onClick={() => router.push(`/category/${category.url}`)}
              key={index + 1}
              className="flex items-center gap-x-3 cursor-pointer hover:font-bold hover:text-black h-12 sm:h-14 md:h-16"
            >
              <div>
                <img
                  src={getImg(category.icon)}
                  width={30}
                  height={30}
                  alt="category"
                />
              </div>
              <h2 className="text-xs sm:text-sm md:text-base fw_400">
                {category.name}
              </h2>
            </div>
          ))}
        <div
          onClick={() => router.push("/allCategories")}
          className="flex items-center gap-x-3 cursor-pointer text-black rounded-lg justify-center px-2 h-12 sm:h-14 md:h-16 bg-zinc-100 hover:scale-95 duration-300"
        >
          <h2 className="text-xs sm:text-sm md:text-base fw_600 text-black">
            Show All
          </h2>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};
export default IndustriesDropdown;
