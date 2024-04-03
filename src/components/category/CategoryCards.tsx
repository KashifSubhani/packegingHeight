import gridActiveImg from "../../static/gridActiveImg.svg";
import GridBlack from "../../static/2GridBlack.png";
import GreenList from "../../static/GreenList.png";
import blackList from "../../static/blackList.svg";
import search from "../../static/search.svg";
import Image from "next/image";
import { Container, useMediaQuery } from "@mui/material";
import { CardsGrid } from "./cardsGrid";
import { useState } from "react";
import { CardsList } from "./cardsList";

export const CategoryCards = (props: any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const [tab, setTab] = useState(0);
  return (
    <Container maxWidth={"lg"}>
      <div className="pt-10 pb-14">
        <p className="text-xl sm:text-2xl fw_400">
          Explore Packaging Solutions
        </p>
        <div className="flex items-center justify-between mt-4 gap-y-5 gap-x-10 flex-wrap">
          <div className="drop-shadow-md h-10 w-80 items-center gap-x-3 rounded-md bg-white px-3 flex">
            <Image src={search} alt="" width={20} height={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none bg-white text-xs shadow-none outline-none"
            />
          </div>
          <div className="hidden sm:flex items-center gap-x-3 ml-auto">
            <button onClick={() => setTab(1)}>
              <Image
                src={tab === 1 ? GreenList : blackList}
                alt="4Grid"
                width={20}
                height={20}
                style={{ minWidth: "20" }}
              />
            </button>
            <button
              onClick={() => setTab(0)}
              style={{ width: "20px", minWidth: "20px" }}
            >
              <Image
                src={tab === 0 ? gridActiveImg : GridBlack}
                alt="gridActiveImg"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        {tab === 0 && <CardsGrid cardsData={props.products} />}
        {tab === 1 && (
          <>
            {matches ? (
              <CardsGrid cardsData={props.products} />
            ) : (
              <CardsList cardsData={props.products} />
            )}
          </>
        )}
      </div>
    </Container>
  );
};
