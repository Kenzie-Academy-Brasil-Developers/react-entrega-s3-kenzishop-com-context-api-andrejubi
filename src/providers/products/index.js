import { createContext } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const Products = [
    {
      name: "Teclado Sintetizador XPS-10",
      price: 3759.99,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgnEjpokEsMX8dcSqOkvuiX2gdZwcRZkKd-offKTvvbZB-DwRU7B9HbvP5EOemfKnBL9fvTdopPbVfzHkdlrL9Gg5euXei0EtKvmQKivZF&usqp=CAE",
    },
    {
      name: "Piano Digital Yamaha Piaggero Np12b - Preto",
      price: 1439.1,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT39_lb8rP2Jr3U9rgGbqDdIMqB5HV6P_WHoavNavOw_G5XMyL5CkCZCY2npCA29xBJ9E3qn4w0BiXeshTnVfODs_3hCeE-PYnSutuPZ5iszQ7M5zt0-Dg2&usqp=CAE",
    },
    {
      name: "Yamaha MODX6 Sintetizador",
      price: 8541.0,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_8merge1A0noDZXvbfRe9XoS7yXnjEAp5VOu85ai2h2zv8hn2GyD_SKVLxPhoMhScslfo56v9JuquXuhixqXb_JbGNu73G3mj44uu_HzWzN3gmZDFM-6m2w&usqp=CAE",
    },
    {
      name: "Teclado Arrajador E-X30 Azul ROLAND",
      price: 4499.9,
      image: "https://static.mundomax.com.br/produtos/55380/550/1.webp",
    },
    {
      name: "Teclado Sintetizador ROLAND XPS-10 Preto",
      price: 1439.1,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT39_lb8rP2Jr3U9rgGbqDdIMqB5HV6P_WHoavNavOw_G5XMyL5CkCZCY2npCA29xBJ9E3qn4w0BiXeshTnVfODs_3hCeE-PYnSutuPZ5iszQ7M5zt0-Dg2&usqp=CAE",
    },
    {
      name: "Teclado Musical Eletronico Yamaha PSRE373BRA",
      price: 2199.0,
      image:
        "https://images-americanas.b2w.io/produtos/4382437776/imagens/teclado-musical-eletronico-yamaha-psre373bra/4382437776_1_xlarge.jpg",
    },
    {
      name: "Teclado Sintetizador Roland XPS-10 Vermelho",
      price: 4319.1,
      image:
        "https://d24opie0r44wsr.cloudfront.net/Custom/Content/Products/13/30/1330808_teclado-sintetizador-roland-xps-10-vermelho-61-teclas-sensitivas_m3_637798744126798020.jpg",
    },
    {
      name: "Novation MININOVA Sintetizador de 37 teclas",
      price: 5280.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ck8HGkfQS._AC_UL116_SR116,116_.jpg",
    },
    {
      name: "Roland v-combo vr-730 ",
      price: 11790.0,
      image:
        "https://www.teclacenter.com.br/images/thumbnails/550/450/detailed/18/roland-v-combo-vr-730-teclado-para-performance-ao-vivo-16352.jpg",
    },
  ];

  return (
    <ProductsContext.Provider value={{ Products }}>
      {children}
    </ProductsContext.Provider>
  );
};
