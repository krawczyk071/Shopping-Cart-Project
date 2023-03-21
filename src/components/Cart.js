import CartProduct from "./CartProduct";
import { formatPrice } from "../helpers";
import { prodData } from "../apiData";

export default function Cart(props) {
  const cart = props.cart;
  // const needed = prodData.filter(item => Object.keys(cart).includes(item.id))
  let products = [];
  if (cart) {
    products = cart.map((prod) => {
      return (
        <CartProduct
          key={prod.id}
          data={prodData.find((el) => el.id === prod.id)}
          qty={prod.qty}
          actions={props.actions}
        />
      );
    });
  } else {
    products = <h3>Cart is empty</h3>;
  }

  function total() {
    return cart.reduce((acc, item) => {
      const itemPrice = prodData.find((el) => el.id === item.id).price;
      // console.log(itemPrice);
      return acc + item.qty * itemPrice;
    }, 0);
  }

  return (
    <section>
      <div className="cart">
        <h2 className="cart--title">Your shopping cart</h2>
        {products}
        <h3 className="cart--price">TOTAL {formatPrice(total())}</h3>
        <button className="btn cart--btn__one">Checkout</button>
        <button className="btn cart--btn__two">Back</button>
      </div>
    </section>
  );
}
