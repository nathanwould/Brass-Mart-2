import { Heading } from "@chakra-ui/react";
import ImageCarousel from "../../Layout/Carousel/Carousel";
import useProducts from "../../requests/queries/useProducts";

type Props = {}

function Home({ }: Props) {
  const { data, isLoading, error } = useProducts({
    filter: { productType: { equals: 'instrument'} },
    take: 8,
    skip: 0,
    orderBy: { createdAt: 'desc'}
  });
  return (
    <div>
      {data && <ImageCarousel products={data?.products} />}
    </div>
  )
}

export default Home;