import React, { useEffect, useState, useContext } from "react";
import { coso } from "../utils/coso";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {
    carrito,
    eliminarDelCarrito,
    incrementar,
    decrementar,
    total
  } = useContext(CartContext);



  return (
    <div className="">
      <h2 className="text-center m-3">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((pizzas) => (
          <div key={pizzas.id} className="d-flex align-items-center gap-3 m-5 ">
            <img className="w-25 rounded-circle" src={pizzas.img} alt={pizzas.nombre} />
            <h2>{pizzas.name}</h2>
            <h5>${coso(pizzas.price)}</h5>
            <h5>Cantidad: {pizzas.cant}</h5>
            <button onClick={() => decrementar(pizzas)}> - </button>
            <button onClick={() => incrementar(pizzas)}> + </button>
            <button onClick={() => eliminarDelCarrito(pizzas.id)}>
              Eliminar
            </button>
            <p>Precio final: ${coso(pizzas.price * pizzas.cant)}</p>
          </div>
        ))
      )}
    <h1 className="text-center">Total:${total} </h1>
    </div>
  );
};

export default Cart;
