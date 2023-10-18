import React, { useState } from "react";
import SliderCard from "../SliderCard";

function Services() {
  const cardData = [
    {
      title: "Flexible hydraulique",
      description: "Solutions pour transfert de fluides avec fiabilité.",
      image: "/flexible-gates.jpeg",
    },
    {
      title: "Flexible composite",
      description: "Léger et durable pour diverses applications.",
      image: "/composite.jpeg",
    },
    {
      title: "Flexible inox",
      description:
        "Résistant à l'eau, l'air, et l'huile, adapté à tous les besoins.",
      image: "/inox.webp",
    },
    {
      title: "Flexible industriel",
      description: "Performance optimale pour diverses industries.",
      image: "/industriel.jpeg",
    },
    {
      title: "Composants pneumatiques",
      description: "Fiabilité et efficacité pour systèmes pneumatiques.",
      image: "/pneuma.png",
    },
    {
      title: "Composants hydrauliques et industriels",
      description: "Solutions complètes pour vos besoins industriels.",
      image: "/hydro.jpeg",
    },
  ];

  const electrique = [
    {
      title: "Groupes électrogènes",
      description: "Fourniture d'énergie fiable pour toutes les situations.",
      image: "/groupe-electro.jpeg",
    },
    {
      title: "automate simens",
      description: "Fourniture d'énergie fiable pour toutes les situations.",
      image: "/automate.jpeg",
    },
    {
      title: "Disjoncteurs",
      description: "Sécurité électrique avec une coupure instantanée.",
      image: "/disjoncteur.jpeg",
    },
    {
      title: "Batteries et piles",
      description: "Stockage d'énergie pour diverses applications.",
      image: "/batterie.jpeg",
    },
    {
      title: "Contacteurs",
      description: "Contrôle électrique précis et fiable.",
      image: "/contacteur.webp",
    },
    {
      title: "Variateurs",
      description: "Régulation de vitesse et contrôle pour vos moteurs.",
      image: "/variateur.jpeg",
    },
    {
      title: "Onduleurs",
      description: "Fourniture d'énergie ininterrompue en cas de coupure.",
      image: "/onduleur.jpeg",
    },
  ];

  return (
    <div>
      <div className="our-services container" id="nos-produits">
        <h2>Nos Produits IEM</h2>
        <p>
          produits IEM de qualité supérieure, comprenant des solutions
          mécaniques, hydrauliques et électrique pour répondre à vos besoins
          industriels
        </p>
        <div className="button-container">
          <button className={"active"}>Hydraulique</button>
        </div>
        <SliderCard cardData={cardData} />
        <div className="button-container">
          <button className={"active"}>Electrique</button>
        </div>
        <SliderCard cardData={electrique} />
      </div>
    </div>
  );
}

export default Services;
