import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Container, useMediaQuery } from "@mui/material";
import { getServerSideProps } from "@/services/categoriesService";
import Link from "next/link";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  const matches = useMediaQuery("(max-width:640px)");

  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <div>
        <Container maxWidth="lg">
          <div className="py-20">
            <h1
              className="fw_700 text-center"
              style={{ fontSize: matches ? "5rem" : "8rem" }}
            >
              Oops!
            </h1>
            <p className="uppercase fw_600 text-lg mt-5 text-center">
              we are updating
            </p>
            <p className="text-base leading-5 mt-5 text-center">
              The Page you are looking for might have been removed
              <br className="hidden sm:block" /> had it's name changed or is
              temporarily unavailable.
            </p>
            <div className="flex justify-center w-full mt-8">
              <Link
                href="/"
                className="uppercase text-sm w-52 py-2 hover:scale-95 duration-300 greenBg text-white fw_400 rounded-full shadow-xl mx-auto text-center"
              >
                Got to HomePage
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
