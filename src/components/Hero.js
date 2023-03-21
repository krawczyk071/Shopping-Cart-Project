import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero--text">Step into new world of building!</div>
        <div className="hero--image">
          <img src="./img/minifigures-bg2.png" alt="" className="hero--photo" />
        </div>

        <div className="hero--btn">
          <Link to="/products">Start!</Link>
        </div>
      </div>
    </section>
  );
}
