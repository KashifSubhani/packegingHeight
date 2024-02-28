import { client } from "@/utils/sanityConfig";

export async function getServerSideProps() {
  const query = `*[_type == "category"]`;
  const query3 = `*[_type == "testimonial"]`;
  const data = await client.fetch(query);
  const data3 = await client.fetch(query3);
  return {
    props: { data: data.reverse(), testimonials: data3 },
  };
}

export const getSlug = (slug: any) => {
  if (slug && slug.current) {
    return slug.current;
  }
  return "";
};
