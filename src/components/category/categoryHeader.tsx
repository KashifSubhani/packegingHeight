import { Container } from "@mui/material";
import { GetQouteForm2 } from "./subcomponents/getQouteForm2";
import { useRouter } from "next/router";
import { getImg } from "@/services/descriptionService";

export const CategoryHeader = (props: any) => {
  const router = useRouter();
  return (
    props.category && (
      <Container maxWidth={"lg"}>
        <div className="flex flex-col md:flex-row gap-y-10 md:items-end justify-between py-10 md:gap-x-10">
          <div style={{ maxWidth: "680px" }}>
            <span className="text-xs greenText">
              <button
                className="outline-none shadow-none"
                onClick={() => router.push("/")}
              >
                Home
              </button>{" "}
              /<span className="text-zinc-600"> {router.query.url}</span>
            </span>
            <h1 className="text-4xl fw_600 mt-3">{props.category.name}</h1>
            <p className="text-sm mb-4 mt-3">{props.category.description}</p>
            <div className="grayBg roundede-md p-4 h-80 overflow-hidden flex items-center justify-center">
              <img
                src={getImg(props.category.imageWithAlt).url}
                alt={getImg(props.category.imageWithAlt).alt}
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <GetQouteForm2 productName={props.category.name} />
          </div>
        </div>
      </Container>
    )
  );
};
