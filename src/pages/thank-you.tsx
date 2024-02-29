import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import qouteBg from "../static/qouteBg.svg";
import { Footer } from "@/components/shared/footer/footer";

const ThankYou = ({ data }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <div className="sm:px-6 sm:py-6">
        <div
          className="bg-center bg-cover flex flex-col items-center justify-center w-fullpx-5"
          style={{ backgroundImage: `url(${qouteBg.src})`, height: "30rem" }}
        >
          <h1 className="text-center text-white fw_600" style={{fontSize: "8rem"}}>Thank you</h1>
          <p className="text-center text-white fw_400">
            We really appereciate your submission, We'll get back to you very
            soon!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default ThankYou;
