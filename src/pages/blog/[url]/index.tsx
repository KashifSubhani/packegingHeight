import { BlogQouteForm } from "@/components/blog/blogQouteForm";
import { FollowUS } from "@/components/blog/followUS";
import { BlogDetails } from "@/components/blogDetailsPage/blogDetails";
import { BlogDetailsHeader } from "@/components/blogDetailsPage/blogDetailsHeader";
import { RelatedBlogs } from "@/components/blogDetailsPage/relatedBlogs";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { client } from "@/utils/sanityConfig";
import { Container, useMediaQuery } from "@mui/material";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({
  data,
  blog,
  relatedBlogs,
  boxProducts,
  shapeProducts,
}: any) => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:1024px)");
  const router = useRouter();
  useEffect(() => {
    if (!blog) { router.push("/not-found"); }
  }, [blog, router]);

  return (
    <>
      <NextSeo
        title={blog?.metaTitle}
        description={blog?.metaDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: blog?.metaTags,
          },
        ]}
        canonical={"https://packagingheight.com/blogs/" + blog?.slug.current}
      />
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      {blog && (
        <div>
          <BlogDetailsHeader blog={blog} />
          <Container maxWidth="xl">
            <div className="flex mb-20 flex-col lg:flex-row mt-16 gap-y-8 lg:gap-y-0 lg:gap-x-8">
              <div className="w-full">
                <BlogDetails blog={blog} />
              </div>
              <div
                className="flex flex-col gap-y-8"
                style={{
                  width: matches ? (matches2 ? "100%" : "25rem") : "30rem",
                  minWidth: matches ? (matches2 ? "100%" : "25rem") : "30rem",
                }}
              >
                <div className="sticky top-24">
                  <FollowUS />
                  <div className="mb-6" />
                  <BlogQouteForm />
                </div>
              </div>
            </div>
            <RelatedBlogs blogs={relatedBlogs} />
          </Container>
        </div>
      )}
      <div className="border-t border-zinc-300 mt-12">
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const myUrl = context.query.url;
  const query = `*[ _type == "blogs" && slug.current  == "${myUrl}"][0]`;
  const query2 = `*[_type == "category"]`;

  const blogResponse = await client.fetch(query);
  const data = await client.fetch(query2);
  let relatedBlogs: any = [];
  if (blogResponse && blogResponse.blogCatetgory) {
    const query3 = `*[ _type == "blogs" && blogCatetgory  == "${blogResponse.blogCatetgory}"]`;
    let res: any = await client.fetch(query3);
    relatedBlogs = res.filter((d: any) => d.slug.current !== myUrl);
  }
  const cat1Name = "Box by Material";
  const cat2Name = "Shapes & Styles";
  const query5 = `*[ _type == "category" && name  == "${cat1Name}"][0]`;
  const query6 = groq`*[_type == 'product' && _id in $p_ids1]`;

  const query7 = `*[ _type == "category" && name  == "${cat2Name}"][0]`;
  const query8 = groq`*[_type == 'product' && _id in $p_ids2]`;

  const cat1 = await client.fetch(query5, { cat1Name });
  const cat2 = await client.fetch(query7, { cat2Name });

  let p_ids1: any = [];
  if (cat1 && cat1.products && cat1.products.length > 0) {
    cat1.products.forEach((item: any) => p_ids1.push(item._ref));
  }

  let p_ids2: any = [];
  if (cat2 && cat2.products && cat2.products.length > 0) {
    cat2.products.forEach((item: any) => p_ids2.push(item._ref));
  }

  const products1 = await client.fetch(query6, { p_ids1 });
  const products2 = await client.fetch(query8, { p_ids2 });
  return {
    props: {
      data: data.reverse(),
      blog: blogResponse,
      relatedBlogs: relatedBlogs,
      boxProducts: products1,
      shapeProducts: products2,
    },
  };
}
export default Index;
