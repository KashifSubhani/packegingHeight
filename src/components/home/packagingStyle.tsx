import { Container, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { getImg } from "@/services/descriptionService";
import { getSlug } from "@/services/categoriesService";
export const PackagingStyle = (props: any) => {
  const matches = useMediaQuery("(max-width:450px)");
  const router = useRouter();
  return (
    <Container maxWidth={"lg"}>
      <div className="pb-10 pt-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center fw_600 leading-tight">
          Pick Your Custom Packaging Look!
        </h1>
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
              <div
                key={ind + 1}
                onClick={() => router.push(`/category/${getSlug(data.slug)}`)}
                className={`cursor-pointer ${
                  matches ? "col-span-12" : "col-span-6 md:col-span-3"
                }`}
              >
                <div
                  className="p-3 h-80 md:h-60 lg:h-80 rounded-md flex items-center justify-center"
                  style={{ background: "#F1F8F1" }}
                >
                    <img src={getImg(data.imageWithAlt).url} alt={getImg(data.imageWithAlt).alt} />
                </div>
                <h2 className="fw_600 text-lg md:text-base lg:text-lg mt-3">
                  {data.name}
                </h2>
                <p className="text-sm md:text-xs lg:text-sm mt-2 big_three_lines_elipsis">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
