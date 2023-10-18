import React, { useState } from "react";
import SliderCard from "../SliderCard";

function Services() {
  const cardData = [
    {
      title: "verin hydraulique et pneumatique",
      description: "This is the second card description for a small item",
      image: "/product.webp",
    },
    {
      title: "verin hydraulique et pneumatique",
      description: "This is the second card description for a small item",
      image: "/product.webp",
    },
    {
      title: "verin hydraulique et pneumatique",
      description: "This is the second card description for a small item",
      image: "/product.webp",
    },
    {
      title: "verin hydraulique et pneumatique",
      description: "This is the second card description for a small item",
      image: "/product.webp",
    },
    {
      title: "verin hydraulique et pneumatique",
      description: "This is the second card description for a small item",
      image: "/product.webp",
    },
  ];

  return (
    <div>
      <div className="our-services container">
        <h2>Nos Produits IEM</h2>
        <p>
          produits IEM de qualité supérieure, comprenant des solutions
          mécaniques, hydrauliques et pneumatiques pour répondre à vos besoins
          industriels
        </p>
        <div className="button-container">
          <button className={"active"}>Hydraulique</button>
        </div>
        <SliderCard cardData={cardData} />
        <div className="button-container">
          <button className={"active"}>Pneumatique</button>
        </div>
        <SliderCard cardData={cardData} />
      </div>
    </div>
  );
}

export default Services;
