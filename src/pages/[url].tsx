import { DetailsContent } from "@/components/productDetails/detailsContent";
import DetailsHeader from "@/components/productDetails/detailsHeader";
import { RelatedProducts } from "@/components/productDetails/relatedProducts";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({ data, product, faqs }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!product) {
      router.push("/not-found");
    }
  }, [product, router]);
  return (
    product &&(
      <div>
        <NextSeo
          title={product.metaTitle}
          description={product.metaDescription}
          canonical={product.slug.current}
          additionalMetaTags={[
            {
              name: "keywords",
              content: product.metaTags,
            },
          ]}
        />
        <Navbar data={data} />
        <DetailsHeader product={product} />
        <DetailsContent product={product} />
        <ContentSection contentData={product.content} />
        <Faq faqs={faqs} />
        <RelatedProducts product={product} />
        <Footer />
      </div>
    )
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "product" && slug.current == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;
  const query4 = groq`*[_type == 'faqs' && _id in $ids]`;

  const productResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let product = { ...productResponse };
  let ids: any = [];
  if (
    productResponse &&
    productResponse.faqs &&
    productResponse.faqs.length > 0
  ) {
    productResponse.faqs.forEach((item: any) => ids.push(item._ref));
  }
  const result = await client.fetch(query4, { ids });

  if (
    productResponse &&
    productResponse.category &&
    productResponse.category._ref
  ) {
    const query3 = `*[_type == 'product' && slug.current != "${myUrl}" && category->_id == $id]`;
    const productsRelatedToCategory = await client.fetch(query3, {
      id: productResponse.category._ref,
    });
    product = { ...product, relatedProducts: productsRelatedToCategory };
  }

  return {
    props: {
      data: data.reverse(),
      product: product && product._id ? product : null,
      faqs: result,
    },
  };
}
export default Index;
