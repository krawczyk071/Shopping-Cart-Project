import Card from "./Card";
import React from "react";
import { prodData } from "../apiData";

export default function Products(props) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    setProducts(prodData);
  }, []);

  const cards = products.map((item) => {
    return <Card key={item.id} data={item} addCart={props.addCart} />;
  });
  return <div className="products">{cards}</div>;
}
