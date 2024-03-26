import { AllProductCardsContent } from "@/components/allProducts/allProductCardsContent";
import { SearchPageHeader } from "@/components/search/searchPageHeader";
import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import NotFoundComp from "@/components/shared/notFoundComp";
import { client } from "@/utils/sanityConfig";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index = ({ data, products }: any) => {
  const [list, setList] = useState([]);
  const router: any = useRouter();

  useEffect(() => {
    if (products && router.query.name) {
      let res = products.filter((product: any) =>
        product.name.toLowerCase().includes(router.query.name.toLowerCase())
      );
      setList(res);
    }
  }, [products, router.query.name]);
  return (
    <div>
      <Navbar data={data} />
      <SearchPageHeader length={list && list.length} />
      {list && list.length > 0 ? (
        <AllProductCardsContent products={list} />
      ) : (
        <NotFoundComp />
      )}
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const query = `*[_type == 'product']`;
  const query2 = `*[_type == "category"]`;
  const data = await client.fetch(query2);
  const products = await client.fetch(query);

  return {
    props: {
      data: data.reverse(),
      products: products,
    },
  };
}
export default Index;
