import { getSlug } from "@/services/categoriesService";
import { getImg } from "@/services/descriptionService";
import Link from "next/link";

export const CardListItem = (props: any) => {
  return (
    <Link href={`/${getSlug(props.data.slug)}`}
      className="text-[#606062] shadow-md rounded-lg overflow-hidden flex items-center gap-x-4 w-full cursor-pointer"
          >
      <div
        className="rounded-md h-60 p-3 flex items-center justify-center overflow-hidden"
        style={{ width: "16rem", minWidth: "16rem", background: "#eaf0f5" }}
      >
        {props.data.images &&
          props.data.images.length > 0 &&
          props.data.images[0] && (
            <img
              src={getImg(props.data.images[0]).url}
              alt={getImg(props.data.images[0]).alt}
            />
          )}
      </div>
      <div className="pt-4 pb-6 px-4">
        <h3 className="text-lg fw_600 mb-2 text-black">{props.data.name}</h3>
        <p className="text-sm mb-0 big_three_lines_elipsis">
          {props.data.shortDescription}
        </p>
      </div>
    </Link>
  );
};
