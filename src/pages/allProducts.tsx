import { AllProductCardsContent } from "@/components/allProducts/allProductCardsContent";
import { AllProductsHeader } from "@/components/allProducts/allProductsHeader";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";

const Index = ({ data, products }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <AllProductsHeader />
      <AllProductCardsContent products={products} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const query2 = `*[_type == "category"]`;
  const query3 = `*[_type == 'product']`;
  const data = await client.fetch(query2);
  const productsRelatedToCategory = await client.fetch(query3);
  return {
    props: {
      data: data.reverse(),
      products: productsRelatedToCategory.reverse(),
    },
  };
}
export default Index;
