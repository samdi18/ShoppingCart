import React, { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";

import ProductContext from "../../context/product/productContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="product-list grid-3">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
