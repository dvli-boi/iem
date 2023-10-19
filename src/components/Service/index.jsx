import Image from "next/image";
import React from "react";
import Iconify from "../Iconify";

function Service() {
  return (
    <div className="all-service-container container" id="services">
      <h2>Nos Services IEM</h2>
      <p>
        produits IEM de qualité supérieure, comprenant des solutions mécaniques,
        hydrauliques , pneumatiques pour répondre à vos besoins industriels
      </p>
      <div className="nos-services-container">
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/image1.jpeg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>L'installation Des Équipements Hydrauliques</h3>
          </div>
          <p>
            Notre équipe expérimentée assure une installation précise et
            efficace des équipements hydrauliques, garantissant un
            fonctionnement fiable et optimal de votre système.
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/image2.jpeg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Maintenance Mécaniques Et Hydrauliques</h3>
          </div>
          <p>
            Nous proposons des services de maintenance dédiés à la mécanique et
            à l'hydraulique, assurant ainsi la longévité et les performances
            continues de vos équipements.
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/remise.jpeg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Remise En État Des Machines</h3>
          </div>
          <p>
            Si vos machines ont besoin d'une nouvelle vie, nous sommes
            spécialisés dans la remise en état, redonnant à vos équipements une
            seconde jeunesse à moindre coût.
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/bobinage.jpeg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Réparation Moteurs Électriques</h3>
          </div>
          <p>
            notre equipe excelle dans la réparation de moteurs électriques. Nous
            assurons des services de qualité pour restaurer la performance de
            vos moteurs, prolongeant leur durée de vie et minimisant les temps
            d'arrêt
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/installation.webp"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Installation Électrique</h3>
          </div>
          <p>
            pour des projets résidentiels, commerciaux ou industriels, nous
            offrons des solutions électriques fiables et efficaces, répondant
            précisément à vos besoins. Faites-nous confiance pour des
            installations de qualité, réalisées dans les délais convenus.
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/repar-onduleur.jpeg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>
              Réparation Variateurs De Vitesse, Onduleurs, Cartes Électroniques
              ..
            </h3>
          </div>
          <p>
            Nous sommes spécialisés dans la réparation de variateurs de vitesse,
            onduleurs et cartes électroniques, offrant une solution économique
            pour restaurer vos systèmes électriques à leur pleine
            fonctionnalité.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
