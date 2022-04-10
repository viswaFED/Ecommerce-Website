import React, { Fragment } from "react";
import AvaiableProducts from "./Product";
// import CartContext from "../Components/Cart/CartContext";
// import { Nav , NavBtn} from "../Components/NavBar/NavbarElements";

const Store = (props) => {
  // let total = 0;
  // const cartCntxt = useContext(CartContext);
  // cartCntxt.items.forEach((element) => {
  //   total += element.quantity;
  // });
  return (
    <Fragment>
      {/* <Nav>
      {<NavBtn onClick={props.Cart}>cart ({total}) </NavBtn> }
      </Nav> */}
      <AvaiableProducts/>
    </Fragment>
  );
};

export default Store;
