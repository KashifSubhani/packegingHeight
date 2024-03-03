import { Container } from "@mui/material";
import gallery from "../../static/gallery.svg";
import Image from "next/image";
export const PremiumFinishes = () => {
  return (
    <Container maxWidth={"lg"}>
      <div className="pb-10 pt-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center fw_600 leading-tight">
          Premimum Finishes
        </h1>
        <p className="text-center mt-2 leading-5 opacity-70 text-sm">
          We know how crucial it is for your packaging to shine bright like a diamond! Our premium finishes guarantee that your packaging looks amazing and feels super fancy in your customers' hands. Because when it comes to packaging, it's all about making a statement, and we're here to help you do it with style!{" "}
          <span className="lowercase">
            of finishing options to ensure SPECTACULAR LOOKS AND PREMIUM
          </span>
          <br className="hidden sm:block" />
          <span className="lowercase"> FEEL OF CUSTOM BOXES</span>
        </p>
        <div className="w-full flex justify-center mt-14">
          <Image src={gallery} alt="gallery" />
        </div>
      </div>
    </Container>
  );
};
