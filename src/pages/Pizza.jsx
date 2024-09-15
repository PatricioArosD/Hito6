import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);
  const url = "http://localhost:5000/api/pizzas/p001";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(getData);

  return (
    <div className="card mx-2" style={{ width: "25vw" }}>
      <img
        src={pizza.img}
        className="card-img-top"
        alt="Plumon"
        style={{ width: "25vw" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-light mb-3 fs-2">Pizza {pizza.name}</h5>
        <hr />
        <p className="card-text h6 fw-light text-center fs-3">Ingredientes: </p>
        <p className="fw-light fs-5">
          <ul>
            {pizza.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient} <FontAwesomeIcon icon={faPizzaSlice} />
              </li>
            ))}
          </ul>
          <hr />
          <h5>Descripción: <br />{pizza.desc} </h5>
        </p>
        <hr />
        <p className="h2 fw-bold green text-center">Total:${pizza.price}</p>
      </div>
      <div className="butonCard">
        <button type="button" className="btn btn-light border border-dark">
          Ver mas <FontAwesomeIcon icon={faEye} />
        </button>
        <button type="button" className="btn btn-dark border border-light">
          Añadir <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};

export default Pizza;
