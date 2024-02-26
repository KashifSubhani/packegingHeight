import { getImg, renderDescription } from "@/services/descriptionService";
import { useRouter } from "next/router";

export const CardListItem = (props: any) => {
  const router = useRouter();
  return (
    <div
      className="shadow-md rounded-lg overflow-hidden flex items-center gap-x-4 w-full cursor-pointer"
      onClick={() => router.push("/" + props.data.url)}
    >
      <div
        className="rounded-md h-60 p-3 flex items-center justify-center overflow-hidden"
        style={{ width: "16rem", minWidth: "16rem", background: "#eaf0f5" }}
      >
        {props.data.images && props.data.images.length > 0 && (
          <img src={getImg(props.data.images[0])} alt="cardImg1" />
        )}
      </div>
      <div className="pt-4 pb-6 px-4">
        <h3 className="text-lg fw_600 mb-2 text-black">{props.data.name}</h3>
        <p className="text-sm mb-0 three_lines_elipsis">
          {renderDescription(props.data.description)}
        </p>
        {/* <p className="text-sm mt-5 fw_600">MOQ from 500 units</p> */}
      </div>
    </div>
  );
};
