import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: "free",
      fade: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(slider) {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide sliders">
            <div className="slider2"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                Fabrication flexible <br />
                et vérin hydraulique
              </h2>
              <p>
                Nous proposons à nos clients de la fiabilité et de la qualité à
                un tarif abordable.
              </p>
            </div>
          </div>
          <div className="keen-slider__slide sliders">
            <div className="slider3"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                Vente touts les accessoires <br />
                pneumatiques{" "}
              </h2>
              <p>
                Nous proposons à nos clients de la fiabilité et de la qualité à
                un tarif abordable.
              </p>
            </div>
          </div>

          <div className="keen-slider__slide sliders">
            <div className="slider7"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                Vente touts les accessoires <br />
                hydrauliques
              </h2>
              <p>
                Trouvez tout ce dont vous avez besoin pour votre système
                hydraulique ou pneumatique en un seul endroit.
              </p>
            </div>
          </div>
          <div className="keen-slider__slide sliders">
            <div className="slider6"></div>

            <a>nous contacter</a>
            <div className="slider-content">
              <h2>Installation Système Photovoltaïque</h2>
              <p>
                solutions d'installation et de maintenance photovoltaïque
                garantissant une énergie propre et rentable.
              </p>
            </div>
          </div>
          <div className="keen-slider__slide sliders">
            <div className="slider-5"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                Fabrication de Flexible <br />& Vente matériel Hydraulique
              </h2>
              <p>
                Nous proposons à nos clients de la fiabilité et de la qualité à
                un tarif abordable.
              </p>
            </div>
          </div>
          <div className="keen-slider__slide sliders">
            <div className="slider"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                L'installation Et La Maintenance Des Équipements Électriques
              </h2>
              <p>
                des services complets de maintenance et d'installation
                électrique sur mesure pour Vous
              </p>
            </div>
          </div>
          <div className="keen-slider__slide sliders">
            <div className="slider4"></div>
            <a>nous contacter</a>
            <div className="slider-content">
              <h2>
                L'installation Et La Maintenance Des Équipements Électriques
              </h2>
              <p>
                des services complets de maintenance et d'installation
                électrique sur mesure pour Vous
              </p>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
