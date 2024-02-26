import { CategoryCards } from "@/components/category/CategoryCards";
import { CategoryHeader } from "@/components/category/categoryHeader";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";

const Index = ({ data, category, products }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <CategoryHeader category={category} />
      <CategoryCards products={products} />
      <ContentSection />
      <Faq />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "category" && url == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;
  const query3 = `*[_type == 'product' && category->url == $myUrl]`;
  const categoryResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  const productsRelatedToCategory = await client.fetch(query3, { myUrl });
  return {
    props: {
      data: data.reverse(),
      category: categoryResponse,
      products: productsRelatedToCategory,
    },
  };
}
export default Index;
