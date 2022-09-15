import { Heading, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import BreadCrumbs from "../../Layout/BreadCrumbs/BreadCrumbs";
import useProduct from "../../requests/queries/useProduct";
import { IBreadcrumbItem } from "../../types";
import formatBreadcrumb from "../../utils/formatBreadcrumb";
import getTheBreadcrumbs from "../../utils/getTheBreadcrumbs";

function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct({ id });
  const product = data?.product;
  // const breadCrumbs = categories?.map((category: string) => {
  //   console.log(!!category)
  //   if (!!category) {
  //     if (category === "Home") {
  //       return {
  //         name: "Home",
  //         href: "/"
  //       }
  //     } else {
  //       return {
  //         name: `${formatBreadcrumb(category)}s` || "#",
  //         href: `/${category}s` || "#"
  //       };
  //     }
  //   } else return
  // });

  const breadCrumbItems: IBreadcrumbItem[] = getTheBreadcrumbs(data?.product) || null;
  console.log(breadCrumbItems);
  return (
    <Stack
      m={6}
      spacing={6}
    > 
      {data && <BreadCrumbs items={breadCrumbItems} />}
      <Heading>{product?.name}</Heading>
    </Stack>
  );
}

export default SingleProduct;