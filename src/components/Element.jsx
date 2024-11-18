import React, { useState, useEffect } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const Element = (props) => {
  const [arriteminfo, setarriteminfo] = useState([]);
  useEffect(() => {
    setarriteminfo(props.items);
  }, [props.items]);

  return (
    <>
      <div className="items-div">
        <div className="head-div-items"> </div>
        <div className="items-body">
          {arriteminfo.map((item) => (
            <div className="items" id={item.id}>
              <div className="img-items">
                <img src={item.img} alt="" />
              </div>
              <div className="name-items">{item.name}</div>
              <div className="price-items">
                <p>{item.price} T</p>
              </div>
              <div className="button-items">
                <button
                  style={{ display: item.Active ? "flex" : "none" }}
                  className="button-items btn"
                  data-btn={item.id}
                  onClick={props.addToCart}
                >
                  Add to cart
                </button>
              </div>

              <div
                className="counter"
                style={{ visibility: item.Active ? "hidden" : "visible" }}
              >
                <Minus
                  size={16}
                  className="count-icon"
                  data-id={item.id}
                  data-icon="-"
                  onClick={props.funcCount}
                />
                <p className="p-count" data-id={item.id}>
                  {item.count}
                </p>
                <Plus
                  size={16}
                  className="count-icon"
                  data-id={item.id}
                  data-icon="+"
                  onClick={props.funcCount}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Element;
