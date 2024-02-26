import { AllCategoriesContent } from "@/components/allCategories/allCategoriesContent";
import { AllCategoriesHeader } from "@/components/allCategories/allCategoriesHeader";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";

const Index = ({ data }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <AllCategoriesHeader />
      <AllCategoriesContent data={data} />
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
