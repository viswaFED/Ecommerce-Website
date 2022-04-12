import React, { useContext } from "react";
// import { Nav, NavLink, NavMenu, NavBtn, NavGen } from "./NavbarElements";
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import CartContext from "../Cart/CartContext";
// import CartContext from "../Cart/CartContext";
import AuthContext from "../../AuthContext";
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
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  let total = 0;
  const cartCntxt = useContext(CartContext);
  cartCntxt.items.forEach((element) => {
    total += element.quantity;
  });
 
  return (
    <header className={classes.header}>
    <Link to='/'>
      <div className={classes.logo}>React Auth</div>
    </Link>
    <nav>
      <ul>
        {!isLoggedIn && (
          <li>
            <Link to='/auth'>Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to='/Home'>Home</Link>
          </li>
        )}
         {isLoggedIn && (
          <li>
            <Link to='/Store'>store</Link>
          </li>
        )}
         {isLoggedIn && (
          <li>
            <Link to='/about'>about</Link>
          </li>
        )}
         {isLoggedIn && (
          <li>
            <Link to='/contact-us'>contact us</Link>
          </li>
        )}
         {isLoggedIn && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={props.Cart}>cart ({total})</button>
          </li>
        )}
        

        {isLoggedIn && (
          <li>
            <button>Logout</button>
          </li>
        )}

      </ul>
    </nav>
    <div className="headertext">
    <h1 style={{ fontFamily: "Times New Roman" }}>The Generics</h1>
    </div>
  </header>
);
};


export default Navbar;
