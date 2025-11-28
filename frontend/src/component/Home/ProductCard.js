import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  // Dynamically add category class
  const categoryClass = product.category ? product.category.toLowerCase() : "";

  return (
    <Link className={`productCard ${categoryClass}`} to={`/product/${product._id}`}>
      <img src={ product.images?.[0]?.url ||
    "https://via.placeholder.com/300x300?text=No+Image"} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
