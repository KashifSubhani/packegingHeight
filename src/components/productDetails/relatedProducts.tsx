import { Container } from "@mui/material";
import { getImg } from "@/services/descriptionService";
import { useRouter } from "next/router";

export const RelatedProducts = (props: any) => {
  const router = useRouter();
  return (
    props.product &&
    props.product.relatedProducts &&
    props.product.relatedProducts.length > 0 && (
      <Container maxWidth="lg">
        <div className="pb-16">
          <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
            Related Products
          </h1>
          <div className="mt-10 grid grid-cols-12 sm:gap-x-3 gap-y-4">
            {props.product.relatedProducts.map((data: any, index: any) => (
              <div
                onClick={() => router.push("/" + props.data.url)}
                key={index + 1}
                className="col-span-12 sm:col-span-6 lg:col-span-3 cursor-pointer"
              >
                <div
                  className="w-full rounded-md h-72 p-3 flex items-center justify-center overflow-hidden"
                  style={{ background: "#eaf0f5" }}
                >
                  {data.images && data.images.length > 0 && (
                    <img src={getImg(data.images[0])} alt="cardImg1" />
                  )}
                </div>
                <h1 className="text-base fw_400 mt-1">{data.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </Container>
    )
  );
};
