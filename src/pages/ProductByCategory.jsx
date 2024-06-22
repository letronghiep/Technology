import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Container } from "@mui/material";
import ProductItem from "../components/product/products-slide/product-item";
import Pagination from "../components/pagination";
import { getAllProducts } from "../services/products";
import SkeletonProduct from "../components/loading/skeleton-product";

function ProductByCategory() {
  const { slug } = useParams();
  console.log(slug);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const navigate = useNavigate();
  const [sort, setSort] = useState("ctime");
  const [totalPages, setTotalPages] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchedProducts() {
      const data = await getAllProducts({ page, sort, limit });
      if (data) {
        setProducts(data.metadata.data);
        setTotalPages(data.metadata.totalPages);
        setTotalRows(data.metadata.totalRow);
        setCurrentPage(data.metadata.currentPage);
        setLimit(data.metadata.limit);
      }
    }
    fetchedProducts();
  }, [page, sort, limit]);
  const [list, setList] = useState();
  useEffect(() => {
    setList(
      products.filter((item) => item.category_id.slug === slug.toString())
    );
  }, [slug, products]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, limit });
    setPage(newPage);
    navigate(`/collections/${slug}?page=${newPage}&limit=${limit}`);
  };
  if (!list) return <SkeletonProduct />;
  return (
    <Layout>
      <Container className="h-[100vh]">
        {list.length > 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {list.map((item) => (
              <ProductItem
                key={item._id}
                avatar={item.avatar}
                name={item.name}
                price={item.price}
                promotion={item.promotion}
                quantity_import={item.quantity_import}
                slug={item.slug}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full p-20">
            <h1 className="text-lg">Hiện không có sản phẩm</h1>
          </div>
        )}

        <div className="my-5">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pageSize={3}
            totalPages={totalPages}
            totalItems={totalRows}
          />
        </div>
      </Container>
    </Layout>
  );
}

export default ProductByCategory;
