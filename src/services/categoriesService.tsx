import { client } from "@/utils/sanityConfig";

export async function getServerSideProps() {
  const query = `*[_type == "category"]`;
  const query2 = `*[_type == "faqs"]`;
  const data = await client.fetch(query);
  const data2 = await client.fetch(query2);
  return {
    props: { data: data.reverse(), faqs: data2 },
  };
}

export const getSlug = (slug: any) => {
  if (slug && slug.current) {
    return slug.current;
  }
  return "";
};
