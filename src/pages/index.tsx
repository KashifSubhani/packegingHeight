import { GetQoute } from "@/components/home/getQoute";
import { Header } from "@/components/home/header";
import { HowItWorks } from "@/components/home/howItWorks";
import { PackagingStyle } from "@/components/home/packagingStyle";
import { PremiumFinishes } from "@/components/home/premiumFinishes";
import { Testimonials } from "@/components/home/testimonials";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { useRouter } from "next/router";
import { getServerSideProps } from "@/services/categoriesService";
import { homePageContentSectionData } from "@/demoData/homePageContentSectionData";
import { faqsData } from "@/demoData/faqsData";
import { createArrayOfSets } from "@/services/descriptionService";

const Index = ({ data, testimonials }: any) => {
  const router = useRouter();
  return (
    <div className="relative p-0 m-0 w-full h-full">
      <button
        onClick={() => router.push("/requestQoute")}
        className="greenBg text-white w-36 text-xs py-1 -rotate-90 z-20 rounded-tl-sm rounded-tr-sm"
        style={{ position: "fixed", right: "-3.7rem", top: "20rem" }}
      >
        Request for call
      </button>
      <Navbar data={data} />
      <Header />
      <PackagingStyle list={data.filter((_d: any, ind: any) => ind < 4)} />
      <PremiumFinishes />
      <HowItWorks />
      <GetQoute />
      <ContentSection contentData={homePageContentSectionData} />
      <Faq faqs={faqsData} />
      <Testimonials testimonials={createArrayOfSets(testimonials)} />
      <Footer />
    </div>
  );
};
export { getServerSideProps };
export default Index;
