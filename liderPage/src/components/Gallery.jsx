import { Carousel } from "flowbite-react";
import autoestima from "../assets/icons/autoestima.png";
import musculo from "../assets/icons/musculo.png";
import conocimiento from "../assets/icons/conocimiento.png";
import optimismo from "../assets/icons/optimismo.png";
import objetivo from "../assets/icons/objetivo.png";
export function Gallery() {
  return (
    <div className="h-[450px] text-[rgb(35,55,88)]">
      <Carousel slide={false}>
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-white to-[#81abf5]">
          <div className="flex flex-col item-center justify-center gap-2 px-16 mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="size-12">
                <img src={objetivo} alt="" className="sise-full" />
              </div>
              <h3 className="font-bold text-md md:text-xl">Autosuficiencia</h3>
            </div>
            <p className="mx-auto lg:w-[60%] font-medium text-sm md:text-base">
              Contamos la capacidad de ejecutar una tarea o más , porque tenemos
              bien determinadas nuestras habilidades en momentos específicos, en
              las que manejamos nuestras emociones de la mejor forma.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-white to-[#81abf5]">
          <div className="flex flex-col item-center justify-center gap-2 px-16 mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="size-12">
                <img src={optimismo} alt="" className="sise-full" />
              </div>
              <h3 className="font-bold text-md md:text-xl">Optimismo</h3>
            </div>
            <p className="mx-auto lg:w-[60%] font-medium text-sm md:text-base">
              Porque contamos con una perspectiva positiva y esperanza de
              nuestro futuro dentro de nuestra carrera, así mismo del mundo que
              nos rodea. Sabemos que es una parte clave que nos ayuda como motor
              para continuar progresando.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-white to-[#81abf5]">
          <div className="flex flex-col item-center justify-center gap-2 px-16 mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="size-12">
                <img src={conocimiento} alt="" className="sise-full" />
              </div>
              <h3 className="font-bold text-md md:text-xl">Conocimiento</h3>
            </div>
            <p className="mx-auto lg:w-[60%] font-medium text-sm md:text-base">
              Tenemos habilidad para entender y aplicar información, conceptos o
              habilidades aprendidas en distintos contextos. Este conocimiento
              puede ser teórico o práctico y se adquiere a través de la
              educación formal, observación, experimentación y la interacción
              con otros.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-white to-[#81abf5] ">
          <div className="flex flex-col item-center justify-center md:gap-2 px-16 mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="size-12">
                <img src={musculo} alt="" className="sise-full" />
              </div>
              <h3 className="font-bold text-md md:text-xl">Tenacidad</h3>
            </div>
            <p className="mx-auto lg:w-[60%] font-medium text-sm md:text-base">
              Nuestra cualidad de perseverar y persistir en la búsqueda de un
              objetivo a pesar de los obstáculos, dificultades o fracasos que
              puedan surgir en el camino. La tenacidad está relacionada con la
              fuerza de voluntad, la resiliencia y la capacidad de superar
              obstáculos con determinación y coraje.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-white to-[#81abf5]">
          <div className="flex flex-col item-center justify-center gap-2 px-16 mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="size-12">
                <img src={autoestima} alt="" className="sise-full" />
              </div>
              <h3 className="font-bold text-md md:text-xl">Autoestima</h3>
            </div>
            <p className="mx-auto lg:w-[60%] font-medium text-sm md:text-base">
              Evaluamos nuestra propia valía y competencia, lo que se conoce
              como autoestima. Una alta autoestima implica confianza y aprecio
              por uno mismo, mientras que una baja autoestima puede llevar a la
              falta de confianza y autocrítica excesiva. La autoestima es
              crucial para nuestra carrera, desarrollo mental y bienestar
              emocional.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
