import { useParams } from "react-router-dom"
import useProduct from "../../requests/queries/useProduct";

function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct({ id });
  const product = data?.product;
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct