import { client } from "@/utils/sanityConfig";

export async function getServerSideProps() {
  const query = `*[_type == "category"]`;
  const query2 = `*[_type == "category" && featured == true]`;
  const query3 = `*[_type == "testimonial"]`;
  const data = await client.fetch(query);
  const data2 = await client.fetch(query2);
  const data3 = await client.fetch(query3);
  return {
    props: { data: data.reverse(), featuredCategories: data2, testimonials: data3 },
  };
}

export const getSlug = (slug: any) => {
  if (slug && slug.current) {
    return slug.current;
  }
  return "";
};


export const resetForm = (finalData:any) => {
  let obj = {};
  Object.keys(finalData).forEach((key) => {
    obj = { ...obj, [key]: "" };
  });
  return obj;
};