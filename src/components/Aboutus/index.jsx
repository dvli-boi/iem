import React from "react";

function AboutUs() {
  return (
    <div className="container about-us" id="aboutus">
      <img src="/flexible-hydro.png" alt="" className="about-iem-banner" />
      <div className="about-us-desc">
        <h2>a propos de Nous</h2>
        <p>
          IEM est une entreprise spécialisée dans la conception, la réalisation,
          l'installation et la maintenance des équipements électriques,
          électroniques, mécaniques et hydrauliques.
        </p>
        <ul>
          <li>Remise en état des machines</li>
          <li>Maintenance industrielle</li>
          <li>Réparation de vérins</li>
          <li>Usinage</li>
          <li>Hydraulique</li>
          <li>Pneumatique</li>
          <li>Réparation et Rebobinage moteurs électriques</li>
          <li>Pièces détachées suivant modèle</li>
          <li>
            Réparation variateurs de vitesse, onduleurs, cartes électroniques
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
