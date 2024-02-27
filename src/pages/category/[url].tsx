import { CategoryCards } from "@/components/category/CategoryCards";
import { CategoryHeader } from "@/components/category/categoryHeader";
import { ContentSection } from "@/components/shared/contentSection";
import { Faq } from "@/components/shared/faq";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";

const Index = ({ data, category, products, faqs }: any) => {
  return (
    <div>
      <NextSeo
        title={category.metaTitle}
        description={category.metaDescription}
        canonical={category.slug.current}
        additionalMetaTags={[
          {
            name: "keywords",
            content: category.metaTags,
          },
        ]}
      />
      <Navbar data={data} />
      <CategoryHeader category={category} />
      <CategoryCards products={products} />
      <ContentSection contentData={category.content} />
      <Faq faqs={faqs} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "category" && slug.current  == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;
  const query3 = `*[_type == 'product' && category->slug.current  == $myUrl]`;
  const query4 = groq`*[_type == 'faqs' && _id in $ids]`;

  const categoryResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  const productsRelatedToCategory = await client.fetch(query3, { myUrl });
  let ids: any = [];
  if (
    categoryResponse &&
    categoryResponse.faqs &&
    categoryResponse.faqs.length > 0
  ) {
    categoryResponse.faqs.forEach((item: any) => ids.push(item._ref));
  }
  const result = await client.fetch(query4, { ids });
  return {
    props: {
      data: data.reverse(),
      category: categoryResponse,
      products: productsRelatedToCategory,
      faqs: result,
    },
  };
}
export default Index;
