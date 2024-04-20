import { Container } from "@mui/material";
import { PortableText } from "@portabletext/react";

export const DetailsContent = (props: any) => {
  const block = {
    h1: ({ children }: any) => (
      <h1 className="text-5xl fw_600 mb-2 mt-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl fw_600 mb-2 mt-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl fw_600 mb-2 mt-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl fw_600 mb-2 mt-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl fw_600 mb-2 mt-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-lg fw_600 mb-2 mt-4">{children}</h6>
    ),
  };
  return (
    <Container maxWidth="lg">
      <div className="py-10">
        <div className="mt-10 text-sm sm:text-base">
          <PortableText value={props.product.details} components={{ block }} />
        </div>
      </div>
    </Container>
  );
};
