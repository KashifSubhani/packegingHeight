import { Container, useMediaQuery } from "@mui/material";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
import Link from "next/link";
export const PackagingStyle = (props: any) => {
  const matches = useMediaQuery("(max-width:450px)");

  return (
    <Container maxWidth={"lg"}>
      <div className="pb-10 pt-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center fw_600 leading-tight">
          Pick Your Custom Packaging Look!
        </h2>
        <p className="text-center mt-2 leading-5 opacity-70 text-sm">
          Here at Packaging Height, we've got loads of cool styles for
          <br className="hidden sm:block" />
          your fancy and funky packaging.
        </p>
        {props.list && props.list.length > 0 && (
          <div
            className={`grid grid-cols-12 mt-14 gap-y-4 md:gap-y-0 ${
              matches ? "" : "gap-x-4"
            }`}
          >
            {props.list.map((data: any, ind: any) => (
              <Link
                key={ind + 1}
                href={`/category/${getSlug(data.slug)}`}
                className={`cursor-pointer text-[#606062] ${
                  matches ? "col-span-12" : "col-span-6 md:col-span-3"
                }`}
              >
                <div
                  className="p-3 h-80 md:h-60 lg:h-80 rounded-md flex items-center justify-center"
                  style={{ background: "#F1F8F1" }}
                >
                  <img
                    src={getImg(data.imageWithAlt).url}
                    alt={getImg(data.imageWithAlt).alt}
                  />
                </div>
                <p className="fw_600 text-lg md:text-base lg:text-lg mt-3">
                  {data.name}
                </p>
                <p className="text-sm md:text-xs lg:text-sm mt-2 big_three_lines_elipsis">
                  {data.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
