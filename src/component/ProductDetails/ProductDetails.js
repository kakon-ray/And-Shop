import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import PageBanner from "../PageBanner/PageBanner";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { wishListContext } from "../../Contexts/wishListContext";
import { CartContext } from "../../Contexts/CartContext";
import { CompareContext } from "../../Contexts/CompareContext";
import useProducts from "../../Hooks/useProducts";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [shopItem, setShopItem] = useProducts([]);
  const [wishList, setWishList] = useContext(wishListContext);
  const [cartList, setCartList] = useContext(CartContext);
  const [compareList, setCompareList] = useContext(CompareContext);

  let { id } = useParams();

  const productDetailsitem = shopItem.filter((item) => item.id === id);
  const item = productDetailsitem[0];
  const addTowishList = () => {
    const exist = wishList.find(
      (wishItem) => wishItem.item?.id === productDetailsitem[0].id
    );
    if (!exist) {
      setWishList([...wishList, { item }]);
      toast.success(" Successfully Added in Wishlist");
    } else if (exist) {
      toast.error("Already Added in Wishlist");
    }
    console.log(wishList, productDetailsitem[0]);
  };
  const addToCompareList = () => {
    const exist = compareList.find(
      (compareItem) => compareItem.item?.id === productDetailsitem[0]?.id
    );

    if (!exist && compareList.length < 4) {
      setCompareList([...compareList, { item }]);
      toast.success(" Added in Compare List");
    } else if (exist) {
      toast.error("Already Added in Compare List");
    } else {
      toast.error("Do not add more then 4 item ");
    }
  };

  return (
    <>
      <PageBanner page="Product Details" />
      <div id="product-details" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {productDetailsitem[0] && (
              <Card>
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={productDetailsitem[0].img}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 ">
                    <div className="mt-3">
                      <h2>{productDetailsitem[0].name}</h2>
                      <div className="d-flex aligen-items-center">
                        <StarRatings
                          className="py-3 "
                          rating={2.5}
                          starDimension="20px"
                          starSpacing="15px"
                          starRatedColor="#f79837"
                        />
                        <span className="mt-1 ms-3">
                          (Total 20 Customar Review)
                        </span>
                      </div>
                      <div className="my-3">
                        <h2>
                          {productDetailsitem[0].price}{" "}
                          <del style={{ color: "#f79837", marginLeft: "40px" }}>
                            $60.00
                          </del>
                        </h2>
                      </div>
                      <div>
                        <p className="text-secondary">
                          {productDetailsitem[0].text}
                        </p>
                      </div>
                      <div>
                        <select
                          className="my-2"
                          name=""
                          id="dress-size"
                          style={{
                            width: "200px",
                            height: "40px",
                            border: "1px solid #f79837",
                          }}
                        >
                          <option value="mediam">Size</option>
                          <option value="xl">XL</option>
                          <option value="small">S</option>
                          <option value="large">L</option>
                        </select>
                      </div>
                      <div className="my-3">
                        <p>
                          <span
                            className="product-details-wishlistz"
                            onClick={addTowishList}
                          >
                            <FontAwesomeIcon icon={faHeart} size="sm" />
                            Add To Wishlist
                          </span>
                          <span
                            className="ms-4 product-details-wishlistz"
                            onClick={addToCompareList}
                          >
                            <FontAwesomeIcon icon={faCodeCompare} size="sm" />
                            Add To Comparelist
                          </span>
                        </p>
                      </div>
                      <div className="my-2">
                        <Button variant="dark">
                          {" "}
                          Add to Cart
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            size="sm"
                            className="ms-1"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
