import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";
import { getSlug } from "@/services/categoriesService";

export const CardItem = (props: any) => {
  const router = useRouter();
  return (
    <div
      className="shadow-md hover:drop-shadow-xl duration-300 rounded-lg overflow-hidden cursor-pointer bg-white"
      onClick={() => router.push("/" + getSlug(props.data.slug))}
    >
      <div
        className="w-full rounded-md h-72 lg:h-72 p-3 flex items-center justify-center overflow-hidden"
        style={{ background: "#eaf0f5" }}
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
        <h3 className="text-base mb-2 fw_600">{props.data.name}</h3>
        <p className="text-sm mb-0 two_lines_elipsis">
          {props.data.shortDescription}
        </p>
      </div>
    </div>
  );
};
