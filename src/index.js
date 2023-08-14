/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import menu from "./menu.json";
const mainMenu = menu.Menu;
console.log(mainMenu);
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
/*-------------------------*/
/*    HEADER COMPONENT     */
/*-------------------------*/
function Header() {
  return (
    <div className="inner-navbar">
      <div className="left-navbar">
        <h1 className="LOGO">FOODVILA</h1>
      </div>
      <div className="right-navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
/*-------------------------*/
/*    MENU COMPONENT     */
/*-------------------------*/
function Menu() {
  return (
    <div className="menu">
      <h1>
        <u>MENU</u>
      </h1>
      <ul className="menu-items">
        {mainMenu.map((item) => (
          <Card itemobj={item} key={item.item_name} />
        ))}
      </ul>
    </div>
  );
}
/*-------------------------*/
/*    CARD COMPONENT     */
/*-------------------------*/
function Card({ itemobj }) {
  console.log(itemobj);
  return (
    <li className="item-card">
      <div className="card-img">
        <img src={itemobj.item_image} alt={itemobj.item_name} height="200px" />
      </div>
      <div className="Card-Footer">
        <div className="Card-Name">{itemobj.item_name}</div>
        <div className="Card-Price">{itemobj.item_price}</div>
      </div>
    </li>
  );
}

export default Menu;

/*-------------------------*/
/*    FOOTER COMPONENT     */
/*-------------------------*/
function Footer() {
  return (
    <div className="inner-footer">
      <div className="Top-footer">
        <h1>ABOUT FOODVILA</h1>
        <p>
          At FOODVILA, each dish is a masterpiece, meticulously prepared by our
          skilled chefs using the finest ingredients. From innovative creations
          to timeless classics, our menu is a tribute to the art of fine dining.
        </p>
      </div>
      <div className="Bottom-footer">
        <hr />
        <p>All Rights Reserved By FOODVILA</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
