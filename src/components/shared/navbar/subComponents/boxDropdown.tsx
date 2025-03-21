"use client";

import { getSlug } from "@/services/categoriesService";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoxDropdown = (props: any) => {
  // const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = props.list.filter((_d: any, i: any) => i < 10);
    setList(arr);
  }, []);
  return (
    <div
      onMouseEnter={() => props.setShowDropdown(true)}
    //   onMouseLeave={() => props.setShowDropdown(false)}
      className="absolute w-60 top-full left-0 right-0 bg-white z-30 rounded-lg shadow-lg mt-3"
    >
      <div className="flex flex-col">
        {list &&
          list.length > 0 &&
          list.map((item: any, index: any) => (
            <Link
              // onClick={() => router.push(props?.basepath ? `${props?.basepath}/${getSlug(item.slug)}` : `/${getSlug(item.slug)}`)}
              href={props?.basepath ? `${props?.basepath}/${getSlug(item.slug)}` : `/${getSlug(item.slug)}`}
              key={index + 1}
              className={`flex items-center gap-x-3 cursor-pointer hover:font-bold hover:text-black py-3 px-3 ${
                (index !== list.length - 1) ? "border-b" : ""
              }`}
            >
              <h2 className="text-xs sm:text-sm fw_400">
                {item.name}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default BoxDropdown;
