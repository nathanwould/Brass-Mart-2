import { Stack } from "@chakra-ui/react";
import ImageCarousel from "../../Layout/Carousel/Carousel";
import useProducts from "../../requests/queries/useProducts";
import Feature from "./components/Feature";

type Props = {}

function Home({ }: Props) {
  const { data, isLoading, error, isSuccess } = useProducts({
    filter: { productType: { equals: 'instrument'} },
    take: 8,
    skip: 0,
    orderBy: { createdAt: 'desc'}
  });
  return (
    <Stack spacing={12}>
      {isSuccess && <ImageCarousel products={data?.products} />}
      <Feature />
    </Stack>
  )
}

export default Home;