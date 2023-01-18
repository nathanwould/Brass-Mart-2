import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import BreadCrumbs from "../../Layout/BreadCrumbs/BreadCrumbs";
import useProduct from "../../requests/queries/useProduct";
import { IBreadcrumbItem, IProduct } from "../../types";
import getTheBreadcrumbs from "../../utils/getTheBreadcrumbs";
import ProductDetails from "./components/ProductDetails";

function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct({ id });
  const product: IProduct = data?.product;

  const breadCrumbItems: IBreadcrumbItem[] = getTheBreadcrumbs(data?.product) || null;

  return (
    <Stack
      m={6}
      spacing={6}
    > 
      
      <BreadCrumbs items={breadCrumbItems} />

      <Heading>{product?.name}</Heading>

      <ProductDetails product={product} />
      
    </Stack>
  );
}

export default SingleProduct;