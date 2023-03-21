import { Link } from "react-router-dom";

export default function Navbar(props) {
  let countCart = props.data
    ? props.data.reduce((acc, item) => acc + item.qty, 0)
    : 0;

  return (
    <nav>
      <div className="logo">
        <img src="./img/logo.png" alt="" className="logo--photo" />
      </div>
      <ul className="menu">
        <li className="menu--item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu--item">
          <Link to="/products">Products</Link>
        </li>
        <li className="menu--item">
          <Link to="/cart">Cart ({countCart})</Link>
        </li>
      </ul>
    </nav>
  );
}
