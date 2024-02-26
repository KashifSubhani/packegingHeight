import { client } from "@/utils/sanityConfig";

export async function getServerSideProps() {
  const query = `*[_type == "category"]`;
  const data = await client.fetch(query);
  return {
    props: { data: data.reverse() },
  };
}

