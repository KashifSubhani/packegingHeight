/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import homeContentImg from "../../static/homeContentImg.jpg";

export const HomeContentSection = () => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:400px)");
  return (
    <Container maxWidth={"lg"}>
      <div style={{ background: "#F1F8F1" }}>
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 px-3 sm:px-4 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14 xl:px-14">
          <div className="scrollDiv h-80 overflow-y-auto pl-3 md:pl-5 lg:h-96">
            <div className="scrollItem">
              <h2 className="text-xl fw_600 mb-3">
                How Can Packaging Contribute To Brand Identity And Customer
                Experience?
              </h2>
              <p className="text-sm">
                Once upon a time, a small business owner named Lily lived in a
                land not so far away. Lily had a dream, a dream to make her
                brand sparkle in the eyes of her customers. She knew that her
                products were amazing, but she also knew they needed something
                extra to stand out in the crowded market.
              </p>
              <h3 className="text-lg fw_600 mt-3">
                One day, Lily had a brilliant idea: packaging!
              </h3>
              <p className="text-sm mt-3">
                So, Lily set out on her packaging adventure. She chose colors
                that mirrored her brand's personality, a logo that was easy to
                understand, and designs that whispered tales of her products.
                And she was finally done!
              </p>
              <p className="text-sm mt-3">
                Her customers couldn't help but fall in love with the delightful
                unboxing experiences she created for them. She also made sure to
                use eco-friendly materials, which helped her attract more
                customers.
              </p>
              <p className="text-sm mt-3">
                And so, Lily's brand flourished. In the end, Lily realized that
                packaging wasn't just about wrapping products; it was about
                weaving stories. And as she looked at her brand shining bright,
                she knew that her packaging tale was just the beginning of many
                more adventures to come.
              </p>
              <h2 className="text-xl fw_600 mt-4">
                What Are The Key Considerations When Selecting Packaging
                materials?
              </h2>
              <p className="text-sm mt-3">
                Hey there, packaging pros! Let's talk about picking the perfect
                packaging materials. Here are the top things to think about:
              </p>
              <ul className="list-disc mt-10 pl-6 flex flex-col gap-y-5 text-sm">
                <li>
                  <span className="fw_600">Strength and Durability:</span>{" "}
                  Corrugated card stock are tough as nails, making it awesome
                  for shipping and keeping your goodies secure on their journey.
                </li>
                <li>
                  <span className="fw_600">Environmental Vibes:</span> Kraft
                  card stock is eco-friendly, so you can reduce your carbon
                  footprint.
                </li>
                <li>
                  <span className="fw_600">Looks That Wow:</span> Want your
                  packaging to turn heads? Foil card stock is all about the
                  glitz and glam.
                </li>
                <li>
                  <span className="fw_600">Printing Magic:</span> White card
                  stock is ready for your wildest printing dreams.
                </li>
                <li>
                  <span className="fw_600">Texture For Days:</span> Ever felt
                  packaging that just feels awesome? That's the power of
                  textured card stock! It makes your customers go "Ooh!".
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`mx-auto flex rounded-md overflow-hidden ${
              matches2 ? "h-full" : "h-80 lg:h-96"
            } md:mx-0 `}
            style={{
              width: matches ? (matches2 ? "100%" : "20rem") : "24rem",
              minWidth: matches ? (matches2 ? "100%" : "20rem") : "24rem",
            }}
          >
            <Image
              src={homeContentImg}
              alt="homeContentImg"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
