import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CompareList.css";

import { CompareContext } from "../../Contexts/CompareContext";
import { CartContext } from "../../Contexts/CartContext";
import { toast } from "react-toastify";
import CompareCard from "./CompareCard";
const CompareList = () => {
  const [compareList, setCompareList] = useContext(CompareContext);
  const [cartList, setCartList] = useContext(CartContext);

  const addTowCard = (item) => {
    const exist = cartList.find((wishItem) => wishItem.item?.id === item.id);

    if (!exist) {
      setCartList([...cartList, { item }]);
      toast.success(" Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  const removeCompareList = (id) => {
    const newCompareList = compareList.filter(
      (comItem) => comItem?.item?.id !== id
    );
    setCompareList(newCompareList);
  };

  return (
    <div className="my-5 py-5 container-fluid">
      <div className="row mx-1">
        {compareList.length > 0 ? (
          compareList.map((item) => (
            <CompareCard
              key={item?.item?.id}
              item={item}
              addTowCard={addTowCard}
              removeCompareList={removeCompareList}
            />
          ))
        ) : (
          <h1 className="text-center">No Item add to Compare List</h1>
        )}
      </div>
    </div>
  );
};

export default CompareList;
