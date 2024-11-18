import { Component } from "react";
import item1 from "./img/shose.png";
import item2 from "./img/apple watch.jpg";
import item3 from "./img/cap.jpg";
import item4 from "./img/hoode.jpg";
import item5 from "./img/sun glass.jpg";
import item6 from "./img/t-shirt.png";
import item7 from "./img/hat.jpg";
import item8 from "./img/shose2.png";
import item9 from "./img/jacket.jpg";
import item10 from "./img/hoodie2.png";

import {
  MagnifyingGlass,
  ShoppingBagOpen,
  ShoppingCart,
  UserCircle,
  List,
} from "@phosphor-icons/react";
import Paid from "./Paid";
import Element from "./Element";
import "./style.css";

class Shoppingcart extends Component {
  state = {
    arriteminfo: [
      {
        id: 1,
        name: "Nike Shose",
        price: "2,250,000",
        img: item1,
        count: 0,
        Active: true,
      },
      {
        id: 2,
        name: "Apple watch",
        price: "11,120,000",
        img: item2,
        count: 0,
        Active: true,
      },
      {
        id: 3,
        name: "Cap",
        price: "350,000",
        img: item3,
        count: 0,
        Active: true,
      },
      {
        id: 4,
        name: "Hoode",
        price: "890,000",
        img: item4,
        count: 0,
        Active: true,
      },
      {
        id: 5,
        name: "Sun glass",
        price: "560,000",
        img: item5,
        count: 0,
        Active: true,
      },
      {
        id: 6,
        name: "T-shirt",
        price: "560,000",
        img: item6,
        count: 0,
        Active: true,
      },
      {
        id: 7,
        name: "Hat",
        price: "560,000",
        img: item7,
        count: 0,
        Active: true,
      },
      {
        id: 8,
        name: "Black shose",
        price: "560,000",
        img: item8,
        count: 0,
        Active: true,
      },
      {
        id: 9,
        name: "Jacket",
        price: "560,000",
        img: item9,
        count: 0,
        Active: true,
      },
      {
        id: 10,
        name: "Hoodie m2",
        price: "560,000",
        img: item10,
        count: 0,
        Active: true,
      },
    ],
    cartItem: [],
    TotalPrice: 0,
    showcart: false,
    inputValue: "",
    originalItems: [
      {
        id: 1,
        name: "Nike Shose",
        price: "2,250,000",
        img: item1,
        count: 0,
        Active: true,
      },
      {
        id: 2,
        name: "Apple watch",
        price: "11,120,000",
        img: item2,
        count: 0,
        Active: true,
      },
      {
        id: 3,
        name: "Cap",
        price: "350,000",
        img: item3,
        count: 0,
        Active: true,
      },
      {
        id: 4,
        name: "Hoode",
        price: "890,000",
        img: item4,
        count: 0,
        Active: true,
      },
      {
        id: 5,
        name: "Sun glass",
        price: "560,000",
        img: item5,
        count: 0,
        Active: true,
      },
      {
        id: 6,
        name: "T-shirt",
        price: "560,000",
        img: item6,
        count: 0,
        Active: true,
      },
      {
        id: 7,
        name: "Hat",
        price: "560,000",
        img: item7,
        count: 0,
        Active: true,
      },
      {
        id: 8,
        name: "Black shose",
        price: "560,000",
        img: item8,
        count: 0,
        Active: true,
      },
      {
        id: 9,
        name: "Jacket",
        price: "560,000",
        img: item9,
        count: 0,
        Active: true,
      },
      {
        id: 10,
        name: "Hoodie m2",
        price: "560,000",
        img: item10,
        count: 0,
        Active: true,
      },
    ],
  };

  funcCount = (e) => {
    let newcount = 1;

    const intNumber = parseInt(e.target.dataset.id);
    if (e.target.dataset.icon === "+") {
      this.setState((prevState) => ({
        arriteminfo: prevState.arriteminfo.map((item) =>
          item.id === intNumber ? { ...item, count: item.count + 1 } : item
        ),
      }));
    } else {
      this.setState((prevState) => ({
        arriteminfo: prevState.arriteminfo.map((item) =>
          item.id === intNumber
            ? { ...item, count: Math.max(item.count - 1, 0) }
            : item
        ),
      }));
      this.setState((prevState) => ({
        arriteminfo: prevState.arriteminfo.map((item) => {
          return item.count === 0 ? { ...item, Active: true } : item;
        }),
      }));
    }
    this.setState((prevState) => ({
      arriteminfo: prevState.arriteminfo.map((item) => {
        if (item.id === intNumber) {
          newcount = item.count;
          return { ...item };
        }
        return item;
      }),
      cartItem: prevState.cartItem.map((cartitem) =>
        cartitem.id === intNumber ? { ...cartitem, count: newcount } : cartitem
      ),
    }));

    this.setState((prevState) => ({
      cartItem: prevState.cartItem.filter((item) => item.count > 0),
    }));
  };

  addToCart = (e) => {
    const intNumber = parseInt(e.target.dataset.btn);
    const itemToAdd = this.state.arriteminfo.find(
      (item) => item.id === intNumber
    );
    this.setState((prevState) => ({
      arriteminfo: prevState.arriteminfo.map((item) =>
        item.id === intNumber ? { ...item, Active: false } : item
      ),
      cartItem: [...prevState.cartItem, itemToAdd],
    }));

    this.setState((prevState) => {
      const existingItem = prevState.cartItem.find(
        (item) => item.id === intNumber
      );
      if (existingItem.count === 0 && itemToAdd.count === 0) {
        this.setState((prevState) => ({
          cartItem: prevState.cartItem.map((item) =>
            item.id === intNumber ? { ...item, count: item.count + 1 } : item
          ),
          arriteminfo: prevState.arriteminfo.map((item) =>
            item.id === intNumber ? { ...item, count: item.count + 1 } : item
          ),
        }));
      }
    });
  };

  deleteItemCart = (e) => {
    let id = parseInt(e.target.dataset.code);
    const newCartItem = this.state.cartItem.filter((item) => item.id !== id);
    this.setState((prevState) => ({
      cartItem: newCartItem,
      arriteminfo: prevState.arriteminfo.map((item) =>
        item.id === id ? { ...item, Active: true, count: 1 } : item
      ),
    }));
  };

  showCart = () => {
    this.setState(
      (prevState) => ({
        showcart: !prevState.showcart, // تغییر مقدار show
      }),
      () => {
        console.log("showcart:", this.state.showcart); // نمایش مقدار جدید show
      }
    );
  };
  searchfunc = (e) => {
    let searchinputValue = e.target.value.toLowerCase();
    this.setState({ inputValue: searchinputValue });
    if (searchinputValue === "") {
      this.setState((prevState) => ({
        arriteminfo: prevState.originalItems,
      }));
    } else {
      this.setState((prevState) => ({
        arriteminfo: prevState.originalItems.filter(
          (item) => item.name.toLowerCase().indexOf(searchinputValue) !== -1
        ),
      }));
    }
  };

  render() {
    return (
      <div className="main-div">
        <header>
          <div className="header-div">
            <div className="lego-and-search">
              <div className="shop-lego">
                <ShoppingBagOpen size={45} className="lego" />
              </div>

              <div className="search-input-div">
                <MagnifyingGlass className="icons" size={32} />
                <input
                  type="search"
                  placeholder="Search..."
                  onChange={this.searchfunc}
                />
              </div>
            </div>
            <div className="cart-icon">
              <h1 className="name-shop">Click And Collect</h1>
              <ShoppingCart
                className="mx-3 icons"
                size={40}
                onClick={this.showCart}
              />
              <UserCircle size={45} className="icons" />
            </div>
            <div className="res-menu">
              <List size={45} onClick={this.showCart} />
            </div>
          </div>
        </header>

        <div className="body-main-div">
          <Element
            items={this.state.arriteminfo}
            cartItem={this.state.cartItem}
            addToCart={this.addToCart}
            funcCount={this.funcCount}
            isActive={this.state.isActive}
          />
          <div className="img-div"></div>
        </div>
        <div
          className="main-paid-div"
          style={{ right: this.state.showcart ? "2em" : "-30em" }}
        >
          <Paid
            cartItem={this.state.cartItem}
            total={this.state.TotalPrice}
            items={this.state.arriteminfo}
            funcCount={this.funcCount}
            delbycount={this.removeZeroCountItems}
            delete={this.deleteItemCart}
            show={this.state.showcart}
          />
        </div>
      </div>
    );
  }
}

export default Shoppingcart;
