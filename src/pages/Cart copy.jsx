// import React, { useEffect,useState } from "react";
// import { coso } from "../utils/coso";

// const Cart = () => {
//   const [carrito, setCarrito] = useState([])
//   const [pizzas, setPizzas] = useState([])
//   const url = "http://localhost:5000/api/pizzas"
//   const getData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setPizzas(data);
// };
// useEffect(() => {
//     getData();
//     ;
// }, []);

//   let total = carrito.reduce(
//     (acumulador, pizza) => (acumulador += pizza.count),
//     0
//   );

//   let nombretotal = carrito.map(pizza => pizza.count + " " + pizza.name).join("\n");


//   const obtenerCantidad = (pizza) => {
//     const itemEnCarrito = carrito.find((item) => item.id === pizza.id);
//     return itemEnCarrito ? itemEnCarrito.count : 0;
//   };
//   let totalPagar = coso(carrito.reduce(
//     (acumulador, pizza) => (acumulador +=  +pizza.precio * pizza.count),
//     0
//   ));
//   const incrementar = (pizza) => {
//     let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
//     let nuevo_pizza = {
//       id: pizza.id,
//       name: pizza.name,
//       img: pizza.img,
//       precio: pizza.price,
//       count: 1,
//     };
//     if (coincidencia >= 0) {
//       carrito[coincidencia].count++;
//       setCarrito([...carrito]);
//     } else {
//       setCarrito([...carrito, nuevo_pizza]);
//     }
//   };
//   const decrementar = (pizza) => {
//     let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
//     if (coincidencia >= 0) {
//       if (carrito[coincidencia].count > 1) {
//         carrito[coincidencia].count--;
//         setCarrito([...carrito]);
//       } else {
//         carrito.splice(coincidencia, 1);
//         setCarrito([...carrito]);
//       }
//     }
//   };

//   return (
    
//     <div className="">
//       <div className="m3 d-flex justify-content-center">
//         {pizzas.map((pizza) => (
//           <div
//             className="d-flex m-3  flex-column border border-dark border-2 rounded"
//             key={pizza.id}
//           >
//             <div>
//               <img src={pizza.img} className="w-100 rounded-top" alt="" />
//               <p className="text-center fs-3">{pizza.name} </p>
//             </div>
//             <div >
//               <p className="text-center">LLevas: {obtenerCantidad(pizza)} </p>
//               <button
//                 className="btn btn-success m-1"
//                 onClick={() => incrementar(pizza)}
//               >
//                 +
//               </button>
//               <button
//                 className="btn btn-danger m-1"
//                 onClick={() => decrementar(pizza)}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <h5>detalles del pedido: {nombretotal} </h5>
//       <h2>cantidad de produtos {total} </h2>
//       <h2>Cantidad a Pagar {"$"+totalPagar} </h2>
//     </div>
//   );
// };

// export default Cart;
