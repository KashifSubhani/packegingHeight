import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gridActiveImg from "../../static/gridActiveImg.svg";
import Image from "next/image";
import { faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, useMediaQuery } from "@mui/material";
import { CardsGrid } from "./cardsGrid";
import { useState } from "react";
import { CardsList } from "./cardsList";

export const CategoryCards = (props:any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const [tab, setTab] = useState(0);
  return (
    <Container maxWidth={"lg"}>
      <div className="pt-10 pb-14">
        <h1 className="text-xl sm:text-2xl fw_400">
          Explore Packaging Solutions
        </h1>
        <div className="flex items-center justify-between mt-4 gap-y-5 gap-x-10 flex-wrap">
          <div className="drop-shadow-md h-10 w-80 items-center gap-x-3 rounded-md bg-white px-3 flex">
            <FontAwesomeIcon icon={faSearch} className="text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none bg-white text-xs shadow-none outline-none"
            />
          </div>
          <div className="hidden sm:flex items-center gap-x-3 ml-auto">
            <button className="-mt-1" onClick={() => setTab(1)}>
              <FontAwesomeIcon
                icon={faList}
                className={`text-lg ${tab === 1 ? "greenText" : ""}`}
              />
            </button>
            <button
              onClick={() => setTab(0)}
              style={{ width: "20px", minWidth: "20px" }}
            >
              <Image src={gridActiveImg} alt="gridActiveImg" width={18} />
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
