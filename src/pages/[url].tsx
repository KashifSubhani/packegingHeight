import { DetailsContent } from "@/components/productDetails/detailsContent";
import DetailsHeader from "@/components/productDetails/detailsHeader";
import { RelatedProducts } from "@/components/productDetails/relatedProducts";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";

const Index = ({ data, product }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <DetailsHeader product={product} />
      <DetailsContent product={product} />
      <ContentSection />
      <Faq />
      <RelatedProducts product={product} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "product" && url == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;

  const productResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let product = { ...productResponse };
  if (
    productResponse &&
    productResponse.category &&
    productResponse.category._ref
  ) {
    const query3 = `*[_type == 'product' && url != "${myUrl}" && category->_id == $id]`;
    const productsRelatedToCategory = await client.fetch(query3, {
      id: productResponse.category._ref,
    });
    product = { ...product, relatedProducts: productsRelatedToCategory };
  }
  return {
    props: {
      data: data.reverse(),
      product: product,
    },
  };
}
export default Index;
