import React, { useState, useEffect } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import item from "./img/shose.png";
import { Trash } from "@phosphor-icons/react";

const Paid = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    setCartItem(props.cartItem);
  }, [props.cartItem]);
  useEffect(() => {
    totalfunc();
  }, [cartItem]);

  function totalfunc() {
    let totalPrice = 0;

    cartItem.forEach((item) => {
      let itemprice = item.price.replace(/,/g, "");
      console.log(itemprice);
      itemprice = parseInt(itemprice);

      // محاسبه مجموع
      totalPrice += itemprice * item.count - 20000;
    });

    settotal(totalPrice.toLocaleString());
  }

  return (
    <>
      <div className="paid-div" style={{ left: props.show ? "0em" : "30em" }}>
        <div className="title-paid">
          <p>your Order :</p>
          <hr className="hr-cart" />
        </div>
        <div className="order-paid">
          {/* asd */}
          {/* asd */}
          {cartItem.map((item) => (
            <div className="items-paid">
              <div>
                <div className="img-paid">
                  <img src={item.img} alt="" />
                </div>
                <div className="name-paid">{item.name}</div>
              </div>
              <div className="counter paid-count">
                <p className="p-count" data-id={item.id}>
                  {item.count}
                </p>
                <div className="icon-count-paid-div">
                  <Minus
                    size={16}
                    className="count-icon"
                    data-id={item.id}
                    data-icon="-"
                    onClick={props.funcCount}
                  />
                  <Plus
                    size={16}
                    className="count-icon"
                    data-id={item.id}
                    data-icon="+"
                    onClick={props.funcCount}
                  />
                </div>
              </div>
              <div className="price-paid">
                <div className="price-paid-div">
                  <p>{item.price} T</p>
                </div>
                <div className="trash-icon-paid">
                  <Trash size={22} onClick={props.delete} data-code={item.id} />
                </div>
              </div>
            </div>
          ))}
          {/* asd */}
          {/* asd */}
        </div>
        <div className="final-paid-div">
          <div className="title-cart-total">
            <p>Cart Total</p>
          </div>

          <div className="info-cart-total">
            <div>
              <p>Design by Fluttertop</p>
              <p>Discount</p>
            </div>
            <div className="info-cart-total-number">
              <p>Free</p>
              <p>-20,000 T</p>
            </div>
          </div>

          <div className="final-total-price-div">
            <div>
              <p>Cart Total</p>
            </div>
            <div className="total-price">
              <p>{total} T</p>
            </div>
          </div>

          <div className="final-accept-div">
            <button className=" btn bg-white" onClick={totalfunc}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paid;
