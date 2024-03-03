import { Container } from "@mui/material";
import Image from "next/image";
import search from "../../static/search.svg";
import BlockContent from "@sanity/block-content-to-html";

export const DetailsContent = (props: any) => {
  return (
    <Container maxWidth="lg">
      <div className="py-10">
        <div className="drop-shadow-md h-10 w-80 items-center gap-x-3 rounded-md bg-white px-3 flex">
          <Image src={search} alt="" width={20} height={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none bg-white text-xs shadow-none outline-none"
          />
        </div>

        <h1 className="text-3xl fw_600 mt-8">Description</h1>
        <div className="mt-10 text-sm sm:text-base">
          <div
            dangerouslySetInnerHTML={{
              __html: BlockContent({
                blocks: props.product.details,
                className: "flex flex-col gap-y-3",
              }),
            }}
          />
        </div>
      </div>
    </Container>
  );
};
