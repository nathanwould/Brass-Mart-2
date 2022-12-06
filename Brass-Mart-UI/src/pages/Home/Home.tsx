import { Stack } from "@chakra-ui/react";
import ProductCarousel from "../../Layout/Carousel/ProductCarousel";
import useProducts from "../../requests/queries/useProducts";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";

type Props = {}

function Home({ }: Props) {
  const { data, isLoading, error, isSuccess } = useProducts({
    filter: { productType: { equals: 'instrument'} },
    take: 8,
    skip: 0,
    orderBy: { createdAt: 'desc'}
  });
  return (
    <Stack spacing={12} paddingBottom={12}>
      {isSuccess && <ProductCarousel products={data?.products} />}
      <Feature />
      <Testimonial
        quote={"Please don't enter real credit card information! Use the test card provided in the checkout."}
        author={"Nathan Wood, Site Administrator"}
      />
    </Stack>
  )
}

export default Home;