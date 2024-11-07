import { GetQoute } from "@/components/home/getQoute";
import { Header } from "@/components/home/header";
import { HowItWorks } from "@/components/home/howItWorks";
import { PackagingStyle } from "@/components/home/packagingStyle";
import { PremiumFinishes } from "@/components/home/premiumFinishes";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { useRouter } from "next/router";
import { getServerSideProps } from "@/services/categoriesService";
import { faqsData } from "@/demoData/faqsData";
import { createArrayOfSets } from "@/services/descriptionService";
import { HomeContentSection } from "@/components/home/homeContentSection";
import { NextSeo } from "next-seo";

const Index = ({
  data,
  featuredCategories,
  testimonials,
  products,
  boxProducts,
  shapeProducts,
}: any) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Get Custom Boxes & Packaging Solutions | Packaging Height"
        description="Custom boxes & packaging for all industries, crafted to showcase your brand. Quality solutions made easy. Request your free quote!"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Packaging Height, packaging"
          },
        ]}
        canonical={
          "https://packagingheight.com"
        }
      />

      <div className="relative p-0 m-0 w-full h-full">
        <button
          onClick={() => router.push("/contact-us")}
          className="greenBg text-white w-36 text-xs py-1 -rotate-90 z-20 rounded-tl-sm rounded-tr-sm"
          style={{ position: "fixed", right: "-3.7rem", top: "20rem" }}
        >
          Request for call
        </button>
        <Navbar
          data={data}
          boxProducts={boxProducts}
          shapeProducts={shapeProducts}
        />
        <Header />
        <PackagingStyle
          list={featuredCategories.filter((_d: any, ind: any) => ind < 4)}
        />
        <PremiumFinishes />
        <HowItWorks />
        <GetQoute products={products} />
        <HomeContentSection />
        <Faq faqs={faqsData} />
        <Testimonials testimonials={createArrayOfSets(testimonials)} />
        <Footer />
      </div>
    </>
  );
};
export { getServerSideProps };
export default Index;
