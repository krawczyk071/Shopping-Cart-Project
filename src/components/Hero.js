import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero--text">Lorem ipsum dolor sit amet consectetur.</div>
      <div className="hero--image">
        <img src="./img/minifigures-bg2.png" alt="" className="hero--photo" />
      </div>
      <Link to="/products">
        <div className="hero--btn">Start!</div>
      </Link>
    </div>
  );
}
