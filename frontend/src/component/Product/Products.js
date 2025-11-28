import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import "./Search.css";

const categories = ["Man", "Women", "Digital","Analog"];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 8000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Local state for search term

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  
  // This will be used to count the number of filtered products
  const filteredCount = filteredProductsCount || productsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // Initially fetch all products (without filtering)
    dispatch(getProduct(keyword, currentPage, price, "", ratings));
  
  }, [dispatch, keyword, currentPage, price, ratings, alert, error]);

  // Client-side filtering based on selected category with partial match support
  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter((product) => {
          return (
            product.category &&
            product.category.toLowerCase().includes(selectedCategory.toLowerCase())
          );
        });

  // Local search filtering based on searchTerm
  const searchedProducts = filteredProducts.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          
          <Fragment>
            <MetaData title="Search A Product -- ECOMMERCE" />
            <form className="searchBox">
              <input
                type="text"
                placeholder="Search a Watch ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* The Search button is disabled */}
              <input type="submit" value="Search" disabled />
            </form>
          </Fragment>

          {/* <h2 className="productsHeading">Products</h2> */}

          <div className="products">
            {searchedProducts &&
              searchedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            {/* <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={(e, newPrice) => {setPrice(newPrice)}}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={8000}
            /> */}
       

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              <li
                className="category-link"
                onClick={() => setSelectedCategory("")} // Show all when no category selected
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  className="category-link"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)} // Filter products based on category
                >
                  {cat}
                </li>
              ))}
            </ul>

           {/* <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset> */}
          </div>

          {resultPerPage < filteredCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={filteredCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
