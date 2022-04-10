import React, { useContext } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavGen } from "./NavbarElements";
import CartContext from "../Cart/CartContext";
const Navbar = (props) => {
  // class Counter extends Component {
  //   state = {
  //     flag: false,
  //   };
  // }

  // show = () => {
  //   if (this.state.flag === true) {
  //     return <NavBtn onClick={props.Cart}>cart </NavBtn>;
  //   }
  // };
  //   onClick={() => { this.setState({ flag: true });}}
  let total = 0;
  const cartCntxt = useContext(CartContext);
  cartCntxt.items.forEach((element) => {
    total += element.quantity;
  });
  const btn =  <NavBtn onClick={props.Cart}>cart ({total}) </NavBtn>
  //
  return (
    <header>
      <Nav>
        <NavMenu>
          <NavLink to="/auth">Login</NavLink>
          <NavLink to="/Home">Home</NavLink>
          <NavLink id="showcart"
            to="/Store "
            onClick={() => {
              this.setState({ flag: true });
            }}
          >
            Store
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavMenu>
        {/* {this.show()} */}
        {btn}
      </Nav>
      <NavGen>
        <h1 style={{ fontFamily: "Times New Roman" }}>The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar;
