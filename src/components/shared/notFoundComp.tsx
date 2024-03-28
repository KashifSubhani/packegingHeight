import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Container, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { getServerSideProps } from "@/services/categoriesService";

const NotFoundComp = ({ data }: any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const router = useRouter();
  return (
    <div>
      <Navbar data={data} />
      <div>
        <Container maxWidth="lg">
          <div className="py-20">
            <h1
              className="fw_700 text-center"
              style={{ fontSize: matches ? "1.5rem" : "3rem" }}
            >
              Data Not Found!
            </h1>
            <p className="text-base leading-5 mt-5 text-center">
              Sorry, The Data you are looking for is not found.
              <br className="hidden sm:block" /> Please try to search another
              products.
            </p>
            <div className="flex justify-center w-full mt-8">
              <button
                onClick={() => router.push("/")}
                className="uppercase text-sm w-52 py-2 hover:scale-95 duration-300 greenBg text-white fw_400 rounded-full shadow-xl mx-auto"
              >
                Got to HomePage
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default NotFoundComp;
