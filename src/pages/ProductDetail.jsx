import { Home } from "@mui/icons-material";
import { Breadcrumbs, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "~/components/layout/layout";
import SkeletonProduct from "~/components/loading/skeleton-product";
import SingleProduct from "~/components/product/single-product";
import { getProductBySlug } from "../services/products";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchedProduct() {
      setIsFetching(true);
      const data = await getProductBySlug(slug);
      console.log("a", data);
      if (data) {
        setProduct(data.metadata);
      }
      setIsFetching(false);
    }
    fetchedProduct();
  }, [slug]);
  console.log("O", product);
  if (isFetching || !product) return <SkeletonProduct />;
  return (
    <Layout>
      <>
        <Breadcrumbs
          className=""
          sx={{
            fontSize: "14px",
            padding: "10px 0px",
          }}
        >
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            href="/"
          >
            <Home />
            <span>Trang chủ</span>
          </Link>
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            href="/"
          >
            {product?.category_id.category_name}
          </Link>
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            color="inherit"
            href={`/product/${slug}`}
          >
            {product?.name}
          </Link>
        </Breadcrumbs>
        {isFetching ? <SkeletonProduct /> : <SingleProduct product={product} />}
      </>
    </Layout>
  );
}

export default ProductDetail;
