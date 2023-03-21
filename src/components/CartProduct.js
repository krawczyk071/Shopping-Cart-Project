import { formatPrice } from "../helpers";
export default function CartProduct(props) {
  return (
    <div className="cart--prods">
      <div className="prod">
        <div className="prod--img">
          <img src={props.data.img} alt="" className="prod--photo" />
        </div>
        <div className="prod--name">{props.data.name}</div>
        <div className="prod--price">{formatPrice(props.data.price)}</div>
        <div className="prod--qty">
          <button
            className="qty--btn"
            onClick={() => props.actions.subsCart(props.data.id)}
          >
            -
          </button>
          <div className="qty--text">{props.qty}</div>
          <button
            className="qty--btn"
            onClick={() => props.actions.addCart(props.data.id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
