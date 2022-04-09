import React, { useContext } from "react";
import CartContext from "../Cart/CartContext";
import { Nav, NavLink, NavMenu, NavBtn, NavGen } from "./NavbarElements";
const Navbar = (props) => {
  let total = 0;
  const cartCntxt = useContext(CartContext);
  cartCntxt.items.forEach((element) => {
    total += element.quantity;
  });

  return (
    <header>
      <Nav>
        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </NavMenu>
        <NavBtn onClick={props.Cart}>cart ({total}) </NavBtn>
      </Nav>
      <NavGen>
        <h1 style={{ fontFamily: "Times New Roman" }}>The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar;
