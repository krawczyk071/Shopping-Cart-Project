const prodNames = [
  "Baseball Player",
  "Lifeguard",
  "Maraca Man",
  "Pharaoh",
  "Fisherman",
  "Pilot",
  "Hula Dancer",
  "Magician",
  "Tribal Chief",
];

export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function genIdDate() {
  return new Date().valueOf();
}
export function genIdRandom(n = 1000000) {
  return Math.floor(Math.random() * n);
}

export function shuffle(array) {
  array = array.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function prodData() {
  const randPrice = () => {
    return Math.round(Math.floor(Math.random() * 500 + 1500) / 10) * 10;
  };
  const data = prodNames.map((item) => {
    return {
      id: genIdRandom(),
      name: item,
      img: `./img/${item}.webp`,
      price: randPrice(),
    };
  });

  return data;
}
