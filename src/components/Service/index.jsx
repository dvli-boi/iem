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
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
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
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/sanitary-equipment.jpg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/sanitary-equipment.jpg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/sanitary-equipment.jpg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
          </p>
        </div>
        <div className="service-wapper">
          <div className="service-img-container">
            <Image
              src={"/sanitary-equipment.jpg"}
              layout="fill"
              alt="installation sanitaire"
            />
          </div>
          <div className="icon-service-name">
            <div>
              <Iconify icon={"game-icons:auto-repair"} width={25} />
            </div>
            <h3>Service name here</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem,
            quam nobis rerum labore quisquam repellat quia dignissimos optio rem
            repudiandae eligendi eos impedit doloremque consectetur sapiente
            quos eveniet blanditiis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
