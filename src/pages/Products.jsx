import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/layout/layout";
import Pagination from "../components/pagination";
import ProductItem from "../components/product/products-slide/product-item";
import { getAllProducts } from "../services/products";

function ProductsPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [sort, setSort] = useState("ctime");
  const [totalPages, setTotalPages] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
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
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, limit });
    setPage(newPage);
    navigate(`/products?page=${newPage}&limit=${limit}`);
  };

  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-5 gap-3">
          {products?.map((item) => (
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
        <div className="my-5">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pageSize={limit}
            totalPages={totalPages}
            totalItems={totalRows}
          />
        </div>
      </Container>
    </Layout>
  );
}

export default ProductsPage;
