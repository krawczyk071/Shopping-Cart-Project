import { formatPrice } from "../helpers";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.data.img} alt="" className="card--photo" />
      </div>
      <div className="card--text">{props.data.name}</div>
      <div className="card--price">{formatPrice(props.data.price)}</div>
      <button className="btn" onClick={() => props.addCart(props.data.id)}>
        Buy
      </button>
    </div>
  );
}
