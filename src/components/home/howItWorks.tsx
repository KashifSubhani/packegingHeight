/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container } from "@mui/material";
import Image from "next/image";

import workImg from "../../static/workImg.svg";
import workImg2 from "../../static/workImg2.svg";
import workImg3 from "../../static/workImg3.svg";

const howWorksData = [
  {
    name: "Tiny minimums. No maximums.",
    desc: [
      "There's no limit to what we can handle. plus, our",
      " prices are super competitive, so rest easy knowing ",
      " you're getting the best deal for your budget!",
    ],
    img: workImg,
  },
  {
    name: "Receive Instant Quotes",
    desc: [
      "While you're busy crafting your custom boxes, ",
      "we'll crunch the numbers in real time and ",
      "give you instant quotes.",
    ],
    img: workImg2,
  },
  {
    name: "Fast Turnarounds",
    desc: [
      "With eligible orders shipping in 10 days or less ",
      "and even speedier options for those who need it, ",
      "you'll have your packaging in hand before you know it.",
    ],
    img: workImg3,
  },
];
export const HowItWorks = () => {
  return (
    <Container maxWidth={"lg"}>
      <div className="pb-10 pt-5">
        <h2 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          How it works
        </h2>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          Browse through our packaging styles and find the perfect fit for your
          products. Once you've picked your style, it's time to specify the
          quantity you need. Next, select the size that best suits your
          products. Add your personal touch by customizing your boxes with
          images, text, and colors that reflect your brand identity.{" "}
          <br className="hidden sm:block" />
          And here's the best part: you'll receive instant quotes as you design,{" "}
          <br className="hidden sm:block" />
          ensuring full transparency on pricing!
        </p>
        <div
          className={`grid grid-cols-12 mt-14 gap-y-4 md:gap-y-0 md:gap-x-3 lg:gap-x-8`}
        >
          {howWorksData.map((data: any, ind: any) => (
            <div
              key={ind + 1}
              className="grayBg col-span-12 flex flex-col items-center overflow-hidden rounded-md px-4 py-5 md:col-span-4 md:h-80"
            >
              <div className="flex h-32 items-center justify-center">
                <Image src={data.img} alt="data.img" />
              </div>
              <p className="fw_600 mt-3 text-center text-sm lg:text-base">
                {data.name}
              </p>
              <p className="mt-2 text-center text-xs opacity-70 lg:text-sm">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
